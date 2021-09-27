import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import { normalizeConfig } from "next/dist/server/config-shared";

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
    padding: 10,
  },
  cardMedia: {
    width: 160,
  },
  title: {
    fontFamily: "Lato, Yu Gothic Medium, Segoe UI"
  },
  text: {
    fontFamily: "Segoe UI, Yu Gothic Medium, Lato"
  },
});

const FeedLink = ({ name }: { name: string }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Link href={name}>
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h2" variant="h4" className={classes.title}>
                  {name}
                </Typography>
                {/* <Typography variant="h6" color="textSecondary" className={classes.text}>
                  {post.created_at.match(/\d{4}\-\d{2}\-\d{2}/g)}
                </Typography> */}
                {/* <Typography variant="h6" paragraph className={classes.text}>
                  {post.summary}
                </Typography> */}
                <Typography variant="h6" color="primary" className={classes.text}>
                  Continue reading...
                </Typography>
              </CardContent>
            </div>
            <Hidden xsDown>
              <CardMedia
                className={classes.cardMedia}
                image={`/feeds/${name}/media/cover.jpg`}
                title="Article Cover"
              />
            </Hidden>
          </Card>
        </Link>
      </CardActionArea>
    </Grid>
  )
}

export default FeedLink;