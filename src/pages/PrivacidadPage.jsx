import Footer from '../components/Footer.jsx'

export default function PrivacidadPage() {
  return (
    <div className="page-standalone">
      <section className="legal-section">
        <div className="legal-inner">
          <div className="legal-header">
            <span className="legal-kicker">Legal</span>
            <h1 className="legal-title">Aviso de Privacidad</h1>
            <p className="legal-updated">Última actualización: 23/06/2026</p>
          </div>

          <div className="legal-body">
            <p>
              PARTE II — POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES Y AVISO DE PRIVACIDAD
            </p>
            <p>
              En cumplimiento de la Ley Estatutaria 1581 de 2012 y el Decreto 1377 de 2013, 
              que regulan la protección de datos personales en Colombia, Los Equipos E.L 
              pone a disposición de los usuarios del Sitio la siguiente Política de Tratamiento de Datos Personales.
            </p>
            <h2>1. Responsable del tratamiento</h2>
            <p>
              <ul>
                <li>Razón social: Los Equipos E.L / Claudia Lorena Alvarez Madrid </li>
                <li>NIT: 31.434.796-1</li>
                <li>Domicilio: CRA 1C2 # 64-44 BLOQUE 23D APT 101 CHIMINANGOS 1  CALI</li>
                <li>Correo electrónico de contacto: losequipose.l@gmail.com</li>
                <li>Número de teléfono/WhatsApp: +57 312 850 2364</li>
              </ul>
            </p>
            <h2>2. Datos personales que se recolectan</h2>
            <p>
              A través del Sitio y de los canales de contacto asociados (WhatsApp, formularios, llamadas), Los Equipos E.L podrá recolectar:
            </p>
            <ul>
              <li>Nombre completo</li>
              <li>Número de teléfono</li>
              <li>Correo electrónico</li>
              <li>Dirección de entrega o facturación (cuando se requiera despacho de materiales o equipo).</li>
              <li>Información sobre el producto o servicio de interés (materiales o equipo a alquilar).</li>
            </ul>
            <p>
              Los Equipos E.L no solicita ni trata datos sensibles (como datos de salud, religión, orientación sexual o afiliación política) a través de sus canales.
            </p>
            <h2>3. Finalidad del tratamiento</h2>
            <p>
              Los datos personales recolectados serán utilizados para:
            </p>
            <ul>
              <li>Gestionar cotizaciones, ventas de materiales y contratos de alquiler de maquinaria o equipo</li>
              <li>Coordinar la entrega o recogida de productos y equipos.</li>
              <li>Dar respuesta a consultas, reclamos o solicitudes de garantía.</li>
              <li>Enviar información comercial sobre productos, promociones o novedades, siempre que el titular lo autorice.</li>
              <li>Cumplir con obligaciones legales y contables derivadas de la relación comercial.</li>
            </ul>
            <h2>4. Autorización del titular</h2>
            <p>
              Al diligenciar formularios en el Sitio, escribir a través de WhatsApp o suministrar voluntariamente sus datos personales para 
              solicitar una cotización, compra o alquiler, el titular otorga su autorización previa, expresa e informada para que Los Equipos E.L 
              trate sus datos conforme a esta Política. La autorización podrá manifestarse por escrito, de forma oral o mediante conductas inequívocas que 
              permitan concluir razonablemente que fue otorgada, de acuerdo con el Decreto 1377 de 2013.
            </p>
            <h2>5. Derechos del titular de los datos</h2>
            <p>
              De acuerdo con el artículo 8 de la Ley 1581 de 2012, el titular de los datos personales tiene derecho a:
            </p>
            <ul>
              <li>Conocer, actualizar y rectificar sus datos personales frente a Los Equipos E.L.</li>
              <li>Solicitar prueba de la autorización otorgada para el tratamiento de sus datos.</li>
              <li>Ser informado sobre el uso que se ha dado a sus datos personales, previa solicitud.</li>
              <li>Presentar quejas ante la Superintendencia de Industria y Comercio por infracciones a la normatividad de protección de datos.</li>
              <li>Revocar la autorización y/o solicitar la supresión de sus datos, cuando no exista un deber legal o contractual que impida su eliminación.</li>
              <li>Acceder de forma gratuita a sus datos personales que hayan sido objeto de tratamiento.</li>
            </ul>
            <h2>6. Procedimiento para ejercer estos derechos</h2>
            <p>
              El titular puede ejercer sus derechos enviando una solicitud al correo electrónico losequipose.l@gmail.com, 
              indicando su nombre completo, el derecho que desea ejercer (acceso, actualización, rectificación, supresión o revocatoria de autorización) 
              y una descripción clara de su solicitud. Los Equipos E.L dará respuesta dentro de los plazos establecidos por la ley 
              (15 días hábiles para reclamos y 10 días hábiles para consultas, prorrogables conforme a la normatividad vigente).
            </p>
            <h2>7. Transferencia y compartición de datos</h2>
            <p>
              Los Equipos E.L no vende ni cede los datos personales de sus clientes a terceros para fines comerciales ajenos a la relación contractual. 
              Los datos solo podrán compartirse con terceros cuando sea estrictamente necesario para la prestación del servicio 
              (por ejemplo, empresas de transporte o domicilios encargadas de la entrega de materiales o equipos), 
              o cuando exista un requerimiento de autoridad competente.
            </p>
            <h2>8. Seguridad de la información</h2>
            <p>
            Los Equipos E.L implementará medidas técnicas y administrativas razonables para proteger los datos personales de los titulares contra pérdida, 
            uso indebido, acceso no autorizado o alteración.
            </p>
            <h2>9. Vigencia</h2>
            <p>
              Los datos personales serán conservados durante el tiempo que dure la relación comercial con el titular y, posteriormente, 
              durante los plazos legales requeridos para fines contables, fiscales o de defensa ante posibles reclamaciones. 
              Esta Política rige a partir de su publicación en el Sitio y podrá ser modificada en cualquier momento, 
              lo cual será informado oportunamente a los titulares.
            </p>

            <p className="legal-note">
            Para cualquier duda relacionada con esta Política de Tratamiento de Datos Personales o con los Términos y Condiciones, 
            puede escribirnos a través de los canales de contacto indicados al inicio de este documento.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
