import Link from 'next/link';
import Image from 'next/image';
import classes from 'styles/components/posts/PostItem.module.scss';

const PostItem = props => {
    const { title, image, excerpt, date, slug } = props.post;
    const formattedDate = new Date(date).toLocaleDateString('en-us', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const imagePath = `/images/posts/${slug}/${image}`;
    const linkPath = `/posts/${slug}`;

    return (
        <li className={classes.PostItem}>
            <Link href={linkPath}>
                <a className={classes.Container}>
                    <div className={classes.Image}>
                        <Image
                            src={imagePath}
                            alt={title}
                            width={300}
                            height={200}
                            layout='responsive'
                        />
                    </div>
                    <div className={classes.Content}>
                        <div className={classes.Title}>{title}</div>
                        <div className={classes.Time}>{formattedDate}</div>
                        <p className={classes.Text}>{excerpt}</p>
                    </div>
                </a>
            </Link>
        </li>
    );
};

export default PostItem;
