import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

import classes from 'styles/components/posts/PostDetail.module.scss';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

const PostDetail = ({ post }) => {
    const imagePath = `/images/posts/${post.slug}/${post.image}`;

    const customRenderers = {
        p(paragraph) {
            const { node } = paragraph;

            if (node.children[0].tagName === 'img') {
                const image = node.children[0];

                return (
                    <div className={classes.Image}>
                        <Image
                            src={`/images/posts/${post.slug}/${image.properties.src}`}
                            alt={image.alt}
                            width={600}
                            height={300}
                        />
                    </div>
                );
            }

            return <p>{paragraph.children}</p>;
        },

        code(code) {
            const { className, children } = code;
            const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here
            return (
                <SyntaxHighlighter
                    style={atomDark}
                    language={language}
                    children={children}
                />
            );
        },
    };

    return (
        <div className={classes.PostDetail}>
            <div className={classes.Header}>
                <span>{post.title}</span>
                <div className={classes.Image}>
                    <Image src={imagePath} layout='fill' objectFit='cover' />
                </div>
            </div>
            <div className={classes.Content}>
                <ReactMarkdown components={customRenderers}>
                    {post.content}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default PostDetail;
