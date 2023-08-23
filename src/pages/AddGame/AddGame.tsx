import { z } from 'zod';
import { api } from '../../services/api';
import { useForm } from 'react-hook-form';
import { Footer, Header } from '../../components';
import { zodResolver } from '@hookform/resolvers/zod';
import { AddGameContainer, Container } from './AddGame.styles';

const createGameFormSchema = z.object({
  name: z
    .string()
    .nonempty('Required Name.')
    .transform(name => {
      return name
        .trim()
        .split(' ')
        .map(word => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(' ');
    }),
  console: z.string().nonempty('Required Console.'),
  year: z
    .string()
    .nonempty('Required Year.')
    .min(4, 'Invalid year.')
    .max(4, 'Invalid year.'),
  description: z.string().nonempty('Required Description.'),
});

type CreateUserFormData = z.infer<typeof createGameFormSchema>;

export function AddGamePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createGameFormSchema),
  });

  const addGame = async (data: any) => {
    try {
      await api.post('/games', data);
      location.href = '/user';
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <AddGameContainer>
          <div>
            <div className="title">
              <h1>| Add Your Game |</h1>
            </div>
            <form
              onSubmit={handleSubmit(addGame)}
              className="form"
              autoComplete="off"
            >
              <div className="form-control">
                <div className="title">
                  <h2>Information Game</h2>
                </div>
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  className="small-input"
                  {...register('name')}
                />
                {errors.name && <span>{errors.name.message}</span>}
                <label htmlFor="">Console</label>
                <input
                  type="text"
                  list="console"
                  className="small-input"
                  {...register('console')}
                />
                {errors.console && <span>{errors.console.message}</span>}
                <datalist id="console">
                  <option className="console-options">Xbox Series</option>
                  <option className="console-options">Playstation 4</option>
                  <option className="console-options">Nintendo Switch</option>
                </datalist>

                <label htmlFor="">Year</label>
                <input
                  type="number"
                  max="2023"
                  min="1980"
                  className="small-input"
                  {...register('year')}
                />
                {errors.year && <span>{errors.year.message}</span>}
                <label htmlFor="">Description</label>
                <textarea className="big-input" {...register('description')} />
                {errors.description && (
                  <span>{errors.description.message}</span>
                )}
                <div className="button-card">
                  <button type="submit" className="button-cadastro">
                    Register game
                  </button>
                </div>
              </div>
            </form>
          </div>
        </AddGameContainer>
      </Container>
      <Footer />
    </>
  );
}
