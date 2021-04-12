import Layout from "../components/Layout";

import Image from "next/image"

const Team=()=>(
<Layout>

<h2>Team</h2>  
<div className="card-deck">
 
    <div className="card">
    <Image
        src="/williams.png"
        alt="Picture of the la marco"
        width={500}
        height={500}
      />
      <div className="card-body">
        <h4 className="card-title">Lilian Williams</h4>
        <p className="card-text">MD BroadCast</p>
      </div>
    </div>
   
  
  <div className="card">
  <Image
        src="/stephy.jpg"
        alt="Picture of the la marco"
        width={500}
        height={500}
      />
<div className="card-body">
  <h4 className="card-title">Stacy Maina</h4>
  <p className="card-text">Production Manager</p>
</div>
</div>


<div className="card">
<Image
        src="/steph.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
<div className="card-body">
  <h4 className="card-title">Stephanie Wambui</h4>
  <p className="card-text">Host</p>
</div>

</div>


<div className="card">
<Image
        src="/rose2.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
<div className="card-body">
  <h4 className="card-title">Rose Kamande</h4>
  <p className="card-text">Admin Manager</p>
</div>

</div> 

</div>


</Layout>
)
export default Team;