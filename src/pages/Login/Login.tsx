import { useState } from 'react';
import { FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import { MdEmail } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { ContainerBox } from './Login.styles';
import { BasicLoading } from '../../components';

type ILogin = {
  username: string;
  pass: string;
};

export function LoginPage() {
  const { register, handleSubmit } = useForm<ILogin>();
  const [removeLoading, setRemoveLoading] = useState(true);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userLogin = async (data: any) => {
    setRemoveLoading(false);
    setTimeout(async () => {
      try {
        const response = await api.post('/auth', data);
        localStorage.setItem('token', response.data.access_token);
        localStorage.setItem('email', data.username);
        return (location.href = '/');
      } catch (error) {
        console.log(error);
      }
    }, 3000);
  };
  return (
    <ContainerBox>
      <div className="logo">
        <h2>
          <span>.</span>GameLibrary
        </h2>
      </div>

      <div className="form-box">
        <form onSubmit={handleSubmit(userLogin)} autoComplete="off">
          <h2>Login</h2>
          <div className="inputbox">
            <input type="email" placeholder="Email" {...register('username')} />
            <MdEmail className="icon" />
          </div>
          <div className="inputbox">
            <input
              type="Password"
              placeholder="Password"
              {...register('pass')}
            />
            <FaLock className="icon" />
            <div className="forget">
              <label htmlFor="">
                <a href="#">Forget Password</a>
              </label>
            </div>
          </div>

          <div className="buttons">
            <button>Login</button>
          </div>
          <div className="register">
            <p>
              Dont Have a account{' '}
              <Link to={`../createuser`}>
                {' '}
                <a href="">Register</a>{' '}
              </Link>
            </p>
          </div>
        </form>
      </div>
      {!removeLoading && <BasicLoading />}
    </ContainerBox>
  );
}
