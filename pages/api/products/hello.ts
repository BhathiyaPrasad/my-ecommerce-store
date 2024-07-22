export default function handler(req, res) {
 const Reqbody =  req.body 
    res.status(200).json({ text: 'Hello this is APi test' , Reqbody });
  }