import '../index.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


function TechStackCard() {
    return (

        <center>
            <div className="TechStackCard">

                <h1>My tech stack 💻</h1>

                <ImageList sx={{ width: 650, height: 200 }} cols={5} rowHeight={30}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                        <img
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                        </ImageListItem>
                    ))}
                    </ImageList>
           
            </div>
        </center>

    );
}

const itemData = [
  {
    img: 'src/assets/c-line.svg',
    title: 'C',
  },
  {
    img: 'src/assets/javascript-original.svg',
    title: 'Javascript',
  },
  {
    img: 'src/assets/python-original-wordmark.svg',
    title: 'Python',
  },
  {
    img: 'src/assets/react.svg',
    title: 'react',
  },
  {
   img: 'src/assets/java-original-wordmark.svg',
    title: 'Java',
  },

  
 
];

export default TechStackCard