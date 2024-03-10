import { Link } from "react-router-dom"

export default function Layout() {
  return (
    <main>
        <h1>Templ<span>era</span></h1>
        <p>Experience the life as a Japanese monk as many days as you want!</p>
        <Link className="link-log">Log in</Link>
        <p className="link-guest">Continue as a <Link className="guest">guest</Link></p>
        <video playsInline autoPlay muted loop>
            <source src="https://player.vimeo.com/video/921767718?h=38ec44c73a"/>
        </video>
    </main>
  );
}
