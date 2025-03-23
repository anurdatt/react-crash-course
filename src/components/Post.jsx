import classes from "./Post.module.css";

function Post(props) {
    // const [firstName, lastName] = ['Anuran', 'Datta'];

    // const chosenName = Math.random() > 0.5 ? firstName :  lastName;
    return (<li className={classes.post}>
        <p className={classes.author}>{props.author}</p>
        <p className={classes.text}>{props.body}</p>
    </li>);
}

export default Post;