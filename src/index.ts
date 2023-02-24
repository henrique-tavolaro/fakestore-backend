import { env } from './core/config/env';
import app from './core/server/config/app';


// const router = Router()

// router.post('/login', (req: Request, res: Response) => {
//     const {email, password} = req.body;

//     if(email && password){
//         res.setHeader('x-access-token', 'this is my token')
//     }

//     res.status(200).json({
//         'id': 'zi',
//         'name': 'zeca',
//         'email': 'zeca@zeca'
//     })
// })



const port = Number(env.PORT);

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
})