import { FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { api } from '../../services/api';
import { useForm } from 'react-hook-form';
import { ContainerBox } from './CreateUser.styles';
import { Link } from 'react-router-dom';

type ILogin = {
  name: string;
  email: string;
  password: string;
};

export function CreateUserPage() {
  const { register, handleSubmit } = useForm<ILogin>();

  const CreateUser = async (data: any) => {
    try {
      await api.post('/users', data);
      location.href = '/login';
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContainerBox>
      <div className="form-box">
        <div className="Form-value">
          <form onSubmit={handleSubmit(CreateUser)} autoComplete="off">
            <div className="logo">
              <h2>
                <Link to={`/login`}>
                  <span>.</span>GameLibrary
                </Link>
              </h2>
            </div>
            <h3>Create Account</h3>
            <div className="inputbox">
              <MdEmail />
              <input type="text" placeholder="Name" {...register('name')} />
            </div>
            <div className="inputbox">
              <MdEmail />
              <input type="email" placeholder="Email" {...register('email')} />
            </div>
            <div className="inputbox">
              <FaLock />
              <input
                type="Password"
                placeholder="Password"
                {...register('password')}
              />
            </div>

            <button>Create</button>
          </form>
        </div>
      </div>
    </ContainerBox>
  );
}
