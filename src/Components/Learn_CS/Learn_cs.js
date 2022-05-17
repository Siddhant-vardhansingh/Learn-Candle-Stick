import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Module() {
    const list = [
        { id: '1', name: 'Hammer', lm: 'Learn More', quiz: 'quiz' },
        { id: '2', name: 'Piercing Pattern', lm: 'Learn More', quiz: 'quiz' },
        { id: '3', name: 'Bullish Engulfing', lm: 'Learn More', quiz: 'quiz' },
        { id: '4', name: 'The Morning Star', lm: 'Learn More', quiz: 'quiz' },
        { id: '5', name: 'Three White Soldiers', lm: 'Learn More', quiz: 'quiz' },
        { id: '6', name: 'White Marubozu', lm: 'Learn More', quiz: 'quiz' },
        { id: '7', name: 'Three Inside Up', lm: 'Learn More', quiz: 'quiz' },
        { id: '8', name: 'Bullish Harami', lm: 'Learn More', quiz: 'quiz' },
        { id: '9', name: 'Tweezer Bottom', lm: 'Learn More', quiz: 'quiz' },
        { id: '10', name: 'Inverted Hammer', lm: 'Learn More', quiz: 'quiz' },
        { id: '11', name: 'Three Outside Up', lm: 'Learn More', quiz: 'quiz' },
        { id: '12', name: 'On-Neck Pattern', lm: 'Learn More', quiz: 'quiz' },
        { id: '13', name: 'Bullish Counterattack', lm: 'Learn More', quiz: 'quiz' },
        { id: '14', name: 'Hanging man', lm: 'Learn More', quiz: 'quiz' },
        { id: '15', name: 'Dark cloud cover', lm: 'Learn More', quiz: 'quiz' },
        { id: '16', name: 'Bearish Engulfing', lm: 'Learn More', quiz: 'quiz' },
        { id: '17', name: 'The Evening Star', lm: 'Learn More', quiz: 'quiz' },
        { id: '18', name: 'Three Black Crows', lm: 'Learn More', quiz: 'quiz' },
        { id: '19', name: 'Black Marubozu', lm: 'Learn More', quiz: 'quiz' },
        { id: '20', name: 'Three Inside Down', lm: 'Learn More', quiz: 'quiz' },
        { id: '21', name: 'Bearish Harami', lm: 'Learn More', quiz: 'quiz' },
        { id: '22', name: 'Shooting Star', lm: 'Learn More', quiz: 'quiz' },
        { id: '23', name: 'Tweezer Top', lm: 'Learn More', quiz: 'quiz' },
        { id: '24', name: 'Three Outside Down', lm: 'Learn More', quiz: 'quiz' },
        { id: '25', name: 'Bearish Counterattack', lm: 'Learn More', quiz: 'quiz' },
        { id: '26', name: 'Doji', lm: 'Learn More', quiz: 'quiz' },
        { id: '27', name: 'Spinning Top', lm: 'Learn More', quiz: 'quiz' },
        { id: '28', name: 'Falling Three Methods', lm: 'Learn More', quiz: 'quiz' },
        { id: '29', name: 'Rising Three Methods', lm: 'Learn More', quiz: 'quiz' },
        { id: '30', name: 'Upside Tasuki Gap', lm: 'Learn More', quiz: 'quiz' },
        { id: '31', name: 'Downside Tasuki Gap', lm: 'Learn More', quiz: 'quiz' },
        { id: '32', name: 'Mat-Hold', lm: 'Learn More', quiz: 'quiz' },
        { id: '33', name: 'Rising Window', lm: 'Learn More', quiz: 'quiz' },
        { id: '34', name: 'Falling Window', lm: 'Learn More', quiz: 'quiz' },
        { id: '35', name: 'High Wave', lm: 'Learn More', quiz: 'quiz' },
    ]
    return (
        <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{list.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {list.lm}
          </Typography>
          <Typography>
            {list.quiz}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
    )
}

export default Module