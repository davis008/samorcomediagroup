import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress"
import Image from 'next/image'

Router.onRouteChangeStart=url=>{
   
    NProgress.start();
}
Router.onRouteChangeComplete=()=>NProgress.done();

Router.onRouteChangeError=()=>NProgress.done();

const Layout=({children})=>(
    <div className="root">
      
        <Head>
            <title>Samorco Media Group</title>
           
        </Head>
        <header>
    
        <Image
        src="/sam.png"
        alt="rrcbn logo"
        width={100}
        height={50}
        />
        
       Samorco Media Group
        <Link href="/">Home</Link>
        <Link href="/tv">TV</Link>
        <Link href="/team">Team</Link>
        <Link href="/marketing">Marketing</Link>
        <Link href="/auditions">Auditions</Link>
        </header>
        {children}
        <footer>
        <div className="footer-content">
        <h3 className="desc">SAMORCO MEDIA GROUP</h3>
        <p>Kenya Headquarters P.O. Box 24842 Nairobi KE 00100</p>
        <p>Email:<a href="mailto:info@samorcomediagroup.co.ke<">info@samorcomediagroup.co.ke</a></p>
        <p>	Phone: <a href="tel:+254790667712">
        +254790667712</a></p>
        <p>Website: <a href="www.samorcomediagroup.co.ke">www.samorcomediagroup.co.ke</a></p>

        <p>&copy; {new Date().getFullYear()}</p>
        </div>
        </footer>

        <style jsx>
        {`
       .root{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
       }
       header{
          
           width:100%;
           display:flex;
           justify-content:space-around;
           padding:1em;
           font-size:1.2rem;
           background:lightgrey;
       }
       header a{
           color:darkgrey;
           text-decoration:none;
       }
       header a:hover{
           font-weight:bold;
           color:lightgrey
       }
       footer{
        width:100%;
           background:lightblue;
           padding: 1em;
           margin-top: 1em
           
       }
       .footer-content{
           text-align:center;
       }
       
       
        `}
        </style>
        <style global jsx>
            {`
            body{
                margin:0;
                font-size:110%;
                background:#f0f0f0
            }
            `}
        </style>
    </div>
)
export default Layout;
