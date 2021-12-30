import "../footer/style.css";
import Facebook from "../../assets/images/facebook.png"
import Twitter from "../../assets/images/twitter.png"
import Linkdin from "../../assets/images/linkedin.png"
import Youtube from "../../assets/images/youtube.png"
import Google from "../../assets/images/google-plus.png"
import Video from "../../assets/images/play.png"
import Apple from "../../assets/images/apple.png"
import Footerbackimg from "../../assets/images/text.png"


const Footer =()=>{
    return(
        <div>
<div className="footerbackcolor">
<div className="footerflex">
<div className="footerresponsive">
<ul>
    <li>Account</li>
    <li>Account permission</li>
    <li>Get Transcript</li>
    <li>Billing Information</li>
    <li>More Insights</li>
</ul>
</div>
<div className="footerone">
<ul>
    <li>Account</li>
    <li>Account permission</li>
    <li>Get Transcript</li>
    <li>Billing Information</li>
    <li>More Insights</li>
</ul>
</div>

<div className="footerone">
<ul>
    <li>Learning</li>
    <li>Dashboard home</li>
    <li>Course dashboard</li>
    <li>Certification dashboard</li>
    <li>More dashboard</li>
</ul>
</div>

<div className="footerone">
<ul>
    <li>Support</li>
    <li>FAQs/resources</li>
    <li>Live caht support</li>
    <li>Email scte</li>
    <li>More dashboard</li>
</ul>
</div>

<div className="footerone">
<ul>
    <li>Quiclinks</li>
    <li>FAQs/resources</li>
    <li>Live caht support</li>
    <li>Email scte</li>
    <li>More dashboard</li>
</ul>
</div>

<div className="footericons">
<ul>
    <li><img src={Facebook} alt=""/></li>
    <li><img src={Linkdin} alt=""/></li>
    <li><img src={Google} alt=""/></li>
    <li><img src={Twitter} alt=""/></li>
    <li><img src={Facebook} alt=""/></li>
    <li><img src={Video} alt=""/></li>
    <li><img src={Apple} alt=""/></li>
    <li><img src={Youtube} alt=""/></li>
</ul>
</div>
</div>
<div className="footerdownflex">
<div className="leftsidedown">
<ul>
    <li>140 philips Road,Exton PA 19341</li>
    <li>Toll-free: 800.542.5040</li>
    <li>Phone: 610.363.6888</li>
    <li>Fax: 610.8847237</li>
</ul>
</div>
<div className="rightsideDiv">
<img src={Footerbackimg} alt=""/>
</div>
</div>
</div>
        </div>
    )
}
export default Footer;