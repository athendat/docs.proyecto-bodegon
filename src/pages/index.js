import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)} style={{background: 'linear-gradient(90deg, #951721 0%, #FFB400 100%)'}}>
      <div className="container">
        <h1 className="hero__title" style={{color: '#fff', fontWeight: 'bold'}}>Plataforma Bodegón</h1>
        <p className="hero__subtitle" style={{color: '#fff', fontSize: '1.3rem', maxWidth: 700, margin: '0 auto'}}>
          La solución integral para la gestión y entrega de productos a domicilio. Optimiza tu negocio, conecta con tus clientes y administra cada aspecto de tu operación desde un solo lugar.
        </p>
        <div className={styles.buttons} style={{marginTop: 32}}>
          <Link
            className="button button--secondary button--lg"
            style={{background: '#FFB400', color: '#951721', border: 'none', fontWeight: 'bold'}}
            to="/docs/intro">
            Ver documentación de usuario
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Plataforma Bodegón - App de Delivery"
      description="Documentación de la Plataforma Bodegón, solución integral para delivery y gestión de comercios.">
      <HomepageHeader />
      <main>
        <section style={{padding: '2rem 0', background: '#fff'}}>
          <div className="container">
            <h2 style={{color: '#951721', fontWeight: 'bold', textAlign: 'center'}}>Misión</h2>
            <p style={{textAlign: 'center', maxWidth: 800, margin: '0 auto 2rem'}}>
              Brindar a comercios y usuarios una plataforma eficiente, moderna y segura para la gestión y entrega de productos a domicilio, facilitando la conexión entre negocios y clientes.
            </p>
            <h2 style={{color: '#951721', fontWeight: 'bold', textAlign: 'center'}}>Objetivos</h2>
            <ul style={{maxWidth: 800, margin: '0 auto', color: '#222', fontSize: '1.1rem'}}>
              <li>Optimizar la administración de productos, pedidos, pagos y entregas.</li>
              <li>Ofrecer herramientas de gestión financiera, inventario y usuarios.</li>
              <li>Facilitar la comunicación y trazabilidad entre clientes, repartidores y comercios.</li>
              <li>Proveer reportes y métricas para la toma de decisiones.</li>
            </ul>
            <h2 style={{color: '#951721', fontWeight: 'bold', textAlign: 'center', marginTop: 40}}>¿Qué puedes hacer con Bodegón?</h2>
            <ul style={{maxWidth: 800, margin: '0 auto', color: '#222', fontSize: '1.1rem'}}>
              <li>Gestionar catálogos, marcas, categorías y productos.</li>
              <li>Administrar pedidos, pagos, envíos y entregas.</li>
              <li>Controlar usuarios, roles y permisos.</li>
              <li>Monitorear inventario, finanzas y reportes.</li>
              <li>Configurar reglas, pasarelas de pago y módulos del sistema.</li>
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
}
