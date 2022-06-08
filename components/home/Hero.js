import Button from 'components/ui/Button';
import classes from 'styles/components/home/Hero.module.scss';

const Hero = props => {
    return (
        <div className={classes.Hero}>
            <div className={classes.Header}>Welcome to Bloggr.</div>
            <div className={classes.CTA}>
                <p className={classes.Text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    veritatis explicabo exercitationem eos laborum distinctio
                    unde ipsam aliquid eum!
                </p>
                <div className={classes.Actions}>
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
