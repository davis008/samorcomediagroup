import Layout from "../components/Layout";


const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

export async function getServerSideProps() {
  const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PLBV82dMBrka_ukHUT-Z_KZtAL4jiuURfW&key=${process.env.YOUTUBE_API_KEY}`)
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}

const Videos=({ data })=>(
  <Layout>
  <br/>
    <div className="row">
        {data.items.map((item)=>{
            
            const {id,snippet={}}=item;
            const {title,thumbnails={},resourceId}=snippet;
            const {medium={}}=thumbnails;
            return(
              <div className="col-md-3" key={id}>
                     
                     <style jsx>{`
        .col-md-3 {
          margin: 50px;
        }
       
      `}</style>
                    <a  target="_blank" href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                    <img
                     src={medium.url}
                      alt="Picture of the author"
                      width={medium.width}
                    height={medium.height}
                    />
                    <p>{title}</p>
                    </a>
                </div>
            )
        })}
        
    </div>
    </Layout>
    
);
export default Videos;