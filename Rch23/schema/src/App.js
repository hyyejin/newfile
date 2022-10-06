import User from '../../models/user';

const user = new User({ username: 'velopert' });
user.setPassword('mypass123');
