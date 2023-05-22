import React from 'react'
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';

function LocalInfo({today: { city, country, date, population}}) {
    return (
        <CardMedia style={{ textAlign: 'center', marginTop: '12%', marginBottom: '11%'}}>
            <Typography variant="h3" gutterBottom>
                {city}, {country}
            </Typography>
            <Typography variant="h5" gutterBottom>
                {date}
            </Typography>
            <Typography variant="h6" gutterBottom>
                Population: {population.toLocaleString()}
            </Typography>
        </CardMedia>
    )
}

export default LocalInfo
