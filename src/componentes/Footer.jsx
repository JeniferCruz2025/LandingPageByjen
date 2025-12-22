

const Footer = () => {
  return (
        <footer>
            <div className='info flex flex-col items-center text-center'>
                <p>"Ver no es suficiente Hay que mirar con propósito"</p>
            </div>

            <img src="/logo.png" alt="" />

            <hr />

            <div className='links'>
                <p>© 2025 BYJEN. Todos los derechos reservados.</p>
                <ul className="flex gap-1">
                    <li><a href="/privacidade">Política de Privacidad</a></li>
                    <li><a href="/termosdeuso">Condiciones de uso</a></li>
                    <li><a href="/cookies">Política de cookies</a></li>
                </ul>
            </div>
        </footer>
  )
}

export default Footer
