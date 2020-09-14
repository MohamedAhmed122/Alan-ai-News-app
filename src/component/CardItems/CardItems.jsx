import React from "react";
import useStyles from "./styles";
import classNames from "classnames";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";

const CardItems = ({
    activeArticle,
    article: { description, source, title, url, urlToImage, publishedAt },
    i,
}) => {
    const classes = useStyles();
    return (
        <Card
        className={
            (classNames(classes.card), activeArticle === i ? classes.activeCard : null)
        }
        >
        <CardActionArea href={url} target="_blank">
            <CardMedia
            className={classes.media}
            image={
                urlToImage ||
                "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"
            }
            />
            <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="h2">
                {new Date(publishedAt).toDateString()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="h2">
                {source.name}
            </Typography>
            </div>
            <Typography gutterBottom className={classes.title} component="h5">
            {title}
            </Typography>
            <CardContent style={{ height: 130 }}>
            <Typography variant="body2" color="textSecondary" component="p">
                {description}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
            <Button size="small" color="primary">
            Learn More
            </Button>
            <Typography variant="h5" color="textSecondary">
            {i + 1}
            </Typography>
        </CardActions>
        </Card>
    );
};
export default CardItems;
