import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { SyncOutlined } from '@ant-design/icons';
import Link from 'next/Link';
import { useRouter } from 'next/dist/client/router';
import { Context } from '../context';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { state, dispatch } = useContext(Context);
  const { user } = state;

  const router = useRouter();
  useEffect(() => {
    if (user !== null) {
      router.push('/');
    }
  }, [user]);

  const handleSubmit = async e => {
    e.preventDefault();
    //     console.table({ name, email, password });
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/register`, {
        name,
        email,
        password
      });
      //     console.log('Register RESPONSE', data);
      toast('Registration Successful. Please Login');
      setName('');
      setEmail('');
      setPassword('');
      setLoading(false);
    } catch (error) {
      toast(error.response.data);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="jumbotron bg-primary text-center square align-middle">
        Register
      </h1>
      <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-4 p-4"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter Name"
            required
          />
          <input
            type="email"
            className="form-control mb-4 p-4"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />
          <input
            type="password"
            className="form-control mb-4 p-4"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
          />
          <div className="d-grid gap-2">
            <button
              className="btn btn-block btn-primary"
              type="submit"
              disabled={!name || !email || !password || loading}
            >
              {loading ? <SyncOutlined spin /> : 'Submit'}
            </button>
          </div>
        </form>
      </div>
      <p className="text-center p-3">
        Already Registered?{' '}
        <Link href="/login">
          <a>Login</a>
        </Link>
      </p>
    </div>
  );
};

export default Register;
