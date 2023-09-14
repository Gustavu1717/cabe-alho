import './index.scss'
import { Link  } from 'react-router-dom'


export default function Rodape(){
    return(

       <div className='comp-rodape'>
             <aside className='conteudo'>
            <aside className='informacoes'>
              <h2>AJUDA</h2>  
               <Link>Atendimento ao Cliente</Link> 
               <Link>Dúvidas Frequentes</Link> 
               <Link>Políticas de Privacidade</Link> 

            </aside>

            <aside className='informacoes'>
                <h2>INFORMAÇÕES CORPORATIVAS</h2>
                <Link>O que nós somos</Link>
                <Link>Contato</Link>
            </aside>           

            <aside className='informacoes'>
                <h2>FORMAS DE PAGAMENTO</h2>
                <div>
                    <img src='./assets/images/cartao.png'></img>
                    <img src='./assets/images/elo.png'></img>
                    <img src='./assets/images/visa.png'></img>

                </div>
            </aside>            

            <aside className='informacoes'>
                <h2>REDES SOCIAIS</h2>
                <div className='rede'>
                    <img src='./assets/images/instagram.png'></img>
                    <img src='./assets/images/facebook.png'></img>
                    <img src='./assets/images/whatsapp.png'></img>

                </div>
            </aside>           
            
           
        </aside>
        <hr></hr>

        <p>Seus dados pessoais serão respeitados de acordo com a nossa política de privacidade. *Nada será publicado em sua timeline. Serviço válido somente para pessoas físicas.Em caso de dúvidas, acesse nossa central de atendimento.</p>
       </div>
    )
}          