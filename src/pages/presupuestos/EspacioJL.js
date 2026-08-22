import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FiSettings, FiClock, FiServer } from 'react-icons/fi';
import GradientText from '../../components/GradientText';

import TresNochesHeader from './TresNochesHeader';
import ProfileCard from '../../components/extensions/ProfileCard';
import DarkVeil from '../../components/hero/extensions/DarkVeil';
import Footer from '../Footer';
import { translations } from '../../translations';
import LanguageContext from '../../contexts/LanguageContext';

const EspacioJL = () => {
  // Helper to force Spanish context for Footer
  const spanishContextValue = {
    currentLanguage: 'es',
    isEnglish: false,
    t: (key, fallback) => {
      const keys = key.split('.');
      let value = translations.es;
      for (const k of keys) {
        value = value?.[k];
        if (!value) return fallback;
      }
      return value || fallback;
    }
  };

  // Handle hash navigation to sections
  React.useEffect(() => {
    const handleLinkClick = (e) => {
      const target = e.target.closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const localSections = ['#hero', '#plans', '#notices'];

      if (localSections.includes(href)) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        e.preventDefault();
        window.location.href = `/${href}`;
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  return (
    <EspacioJLContainer>
      <RippleBackground>
        <DarkVeil
          hueShift={25}
          noiseIntensity={0.0}
          scanlineIntensity={0}
          speed={1.0}
          scanlineFrequency={0.5}
          warpAmount={0.1}
          resolutionScale={1}
        />
      </RippleBackground>

      <TresNochesHeader />

      <MainContent>
        {/* Hero Section */}
        <Hero id="hero">
          <LeftColumn>
            <Title>
              <GradientText
                colors={[
                  "var(--secondary-color)",
                  "var(--primary-color)",
                  "var(--accent-color)",
                  "var(--secondary-color)",
                  "var(--text-color)",
                  "var(--primary-color)",
                ]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
              >
                Espacio JL
              </GradientText>
            </Title>

            <JobTitle>Sitio Web con Turnos Online y Tienda Integrada</JobTitle>

            <DescriptionText>
              Desarrollamos una plataforma completa, elegante y moderna para potenciar la estética de Espacio JL,
              con reserva de turnos online, catálogo de tratamientos y tienda de productos integrada en un mismo sitio.
            </DescriptionText>

            <FeatureGrid>
              <Feature>
                Alto impacto visual para exhibir sus tratamientos y productos, con experiencia de usuario optimizada para dispositivos móviles (responsive), reserva de turnos y carrito de compras integrado, facilitando las ventas desde cualquier lugar.
              </Feature>
              <Feature>
                Panel de administración intuitivo para gestionar turnos, productos, precios, stock e imágenes sin conocimientos técnicos.
              </Feature>
            </FeatureGrid>
          </LeftColumn>

          <RightColumn>
            <PhotoWrapper>
              <ProfileCard
                name="Espacio JL"
                handle="espaciojl"
                status="Online"
                contactText=""
                avatarUrl="/presupuestos/espaciojl.png"
                showUserInfo={false}
                enableTilt={true}
                className="full-cover-card espaciojl-logo-card"
              />
            </PhotoWrapper>
          </RightColumn>
        </Hero>

        <PlansSection id="plans">
          <SectionTitle>Planes Propuestos</SectionTitle>
          <PlansGrid>
            {/* Plan 1 */}
            <PlanCard>
              <PlanHeader>
                <PlanTitle>Sitio Web Esencial + Turnos + Carrito de Compras</PlanTitle>
                <PlanPrice>$400.000</PlanPrice>
                <PlanDescription>
                  Sitio web de una página para un centro de estética, con presentación de tratamientos,
                  reserva de turnos y tienda de productos con carrito integrado en el mismo sitio.
                </PlanDescription>
              </PlanHeader>

              <PlanFeatures>
                <PlanFeature>Diseño exclusivo alineado al logo y a la paleta de Espacio JL (tonos tierra, crema y terracota)</PlanFeature>
                <PlanFeature>Inicio, Tratamientos, Tienda, Sobre Mí, Turnos y Contacto</PlanFeature>
                <PlanFeature>Listado de servicios con precio y duración: tratamientos faciales, depilación y perfilado de cejas</PlanFeature>
                <PlanFeature>Reserva de turnos: la clienta selecciona servicio, día y horario, y el pedido llega por WhatsApp y correo</PlanFeature>
                <PlanFeature>Tienda con carrito de compras integrado en el mismo sitio — perfumes textiles, sahumerios y aromatización</PlanFeature>
                <PlanFeature>Checkout con envío del pedido por WhatsApp / transferencia (sin pasarela de pago)</PlanFeature>
                <PlanFeature>Panel de administración simple para editar productos, precios, stock e imágenes</PlanFeature>
                <PlanFeature>Galería de trabajos y sección de preguntas frecuentes</PlanFeature>
                <PlanFeature>Desarrollo responsive — adaptado a mobile, tablet y desktop</PlanFeature>
                <PlanFeature>SEO inicial, certificado SSL (HTTPS) e integración con Instagram y WhatsApp</PlanFeature>
                <PlanFeature>Subida a hosting e implementación web</PlanFeature>
              </PlanFeatures>

              <PlanFooter>
                <FiClock /> Tiempo estimado: 1 semana / 2 semanas
              </PlanFooter>
            </PlanCard>

            {/* Plan 2 */}
            <PlanCard>
              <BestValueBadge>Recomendado</BestValueBadge>
              <PlanHeader>
                <PlanTitle>Plataforma Integral — Agenda Propia, Tienda y Gestión</PlanTitle>
                <PlanPrice>$700.000</PlanPrice>
                <PlanDescription>
                  Plataforma completa para un centro de estética multi-servicio, con agenda de turnos propia,
                  tienda online con pagos integrados y una experiencia de reserva y compra profesional.
                </PlanDescription>
              </PlanHeader>

              <PlanFeatures>
                <PlanFeature>Todo lo incluido en el plan Esencial, con diseño ampliado y navegación multipágina</PlanFeature>
                <PlanFeature>Sistema de turnos propio con agenda real: disponibilidad por día y horario, duración por servicio y bloqueo automático de horarios ocupados</PlanFeature>
                <PlanFeature>Configuración de días y horarios de atención, feriados y descansos desde el panel</PlanFeature>
                <PlanFeature>Confirmación y recordatorio automático del turno por correo </PlanFeature>
                <PlanFeature>Posibilidad de solicitar seña para reservar el turno (integración con MercadoPago)</PlanFeature>
                <PlanFeature>Ficha de cada tratamiento con descripción, beneficios, duración, precio y fotos</PlanFeature>
                <PlanFeature>Tienda online completa con categorías, filtros, buscador y ficha individual de producto</PlanFeature>
                <PlanFeature>Carrito de compras y checkout con pago online integrado (MercadoPago), transferencia y WhatsApp</PlanFeature>
                <PlanFeature>Control de stock automático: al concretarse la venta el sistema descuenta la unidad</PlanFeature>
                <PlanFeature>Panel de administración completo: agenda de turnos, ventas, pedidos, productos, stock y contenidos</PlanFeature>
                <PlanFeature>Base de datos de clientas con su historial de turnos y compras</PlanFeature>
                <PlanFeature>Sección de promociones, combos de tratamientos y gift cards</PlanFeature>
                <PlanFeature>Optimización SEO avanzada, seguridad y velocidad de carga</PlanFeature>
                <PlanFeature>Capacitación en vivo para el uso del panel + primer mes de soporte bonificado</PlanFeature>
              </PlanFeatures>

              <PlanFooter>
                <FiClock /> Tiempo estimado: 3 semanas y media
              </PlanFooter>
            </PlanCard>
          </PlansGrid>

          {/* Banners */}
          <MaintenanceBanner>
            <BannerContent>
              <BannerIcon><FiServer /></BannerIcon>
              <BannerText>
                <BannerTitle>Hosting Web (Plan Anual) (Opcional)</BannerTitle>
                <BannerDescription>
                  Hosting web de alto rendimiento administrado por nosotros, con base de datos para turnos y productos.
                  Incluye certificado SSL (HTTPS), copias de seguridad periódicas y soporte técnico directo ante cualquier eventualidad.
                </BannerDescription>
              </BannerText>
              <PriceContainer>
                <AnnualPrice>$3.000<span>/mes</span></AnnualPrice>
                <MonthlyBreakdown>$36.000/año</MonthlyBreakdown>
              </PriceContainer>
            </BannerContent>
          </MaintenanceBanner>

          <MaintenanceBanner>
            <BannerContent>
              <BannerIcon><FiSettings /></BannerIcon>
              <BannerText>
                <BannerTitle>Mantenimiento Mensual (Opcional)</BannerTitle>
                <BannerDescription>
                  Nos encanta ver crecer los proyectos y acompañarlos en su evolución.
                  Incluye actualizaciones visuales y técnicas, carga de nuevas promociones o tratamientos,
                  ajustes en la agenda y soporte prioritario ante cualquier duda.
                </BannerDescription>
              </BannerText>
              <PriceContainer>
                <MonthlyBreakdown>A Coordinar</MonthlyBreakdown>
              </PriceContainer>
            </BannerContent>
          </MaintenanceBanner>
        </PlansSection>

        {/* Section: Clarifications */}
        <ClarificationsSection id="notices">
          <SectionTitle>Información Extra</SectionTitle>
          <ClarificationText>
            Queremos brindarte el mejor servicio posible, siendo totalmente transparentes con nuestro proceso.
            Los precios listados se basan en el material proporcionado y todo es opcional y ajustable a tus necesidades:
            podemos empezar por el plan Esencial y sumar la agenda propia y los pagos online más adelante.
          </ClarificationText>
          <ClarificationText>
            La diferencia principal entre ambos planes está en el sistema de turnos. En el plan Esencial la clienta elige
            su horario y el pedido de reserva te llega para confirmarlo; en el plan Integral la agenda es automática,
            se bloquean solos los horarios ocupados y podés administrar todo desde el panel, además de cobrar la seña online.
          </ClarificationText>
          <ClarificationText>
            El desarrollo no incluye el hosting ni el dominio, que se cotizan aparte y quedan a nombre de Espacio JL.
          </ClarificationText>
          <ClarificationText>
            En cuanto a los pagos, no cobramos el 100% por adelantado. Generalmente trabajamos con un pago inicial
            para comenzar el proyecto y cubrir los gastos iniciales.
            Una vez el cliente quede satisfecho con el resultado final, se realiza el pago restante.
          </ClarificationText>
        </ClarificationsSection>
      </MainContent>

      <LanguageContext.Provider value={spanishContextValue}>
        <Footer />
      </LanguageContext.Provider>
    </EspacioJLContainer>
  );
};

export default EspacioJL;

// Animaciones
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// Styled Components
const EspacioJLContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #0b0705;
  color: #ffffff;
  position: relative;
  overflow-x: hidden;

  /* Custom Theme variables locally */
  --primary-color: #c98b5e;
  --secondary-color: #e3c9ae;
  --accent-color: #a8674a;
  --text-color: #EFE7DF;

  .espaciojl-logo-card .pc-card .pc-avatar-content .avatar {
    object-fit: contain !important;
    padding: 1.5rem;
    filter: drop-shadow(0 0 25px rgba(201, 139, 94, 0.35));
  }

  .espaciojl-logo-card .pc-card {
    background-image: radial-gradient(circle at center, rgba(201, 139, 94, 0.15) 0%, transparent 70%), var(--behind-gradient) !important;
  }
`;

const RippleBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  pointer-events: none;
  height: 100vh;
  width: 100vw;
`;

const MainContent = styled.main`
  padding-top: 120px;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 100px;
  }
`;

const Hero = styled.section`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;
  min-height: 80vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
    min-height: auto;
    padding-bottom: 2rem;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const RightColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 900;
  margin: 0;
  font-family: "Megrim", system-ui, sans-serif;
  line-height: 1.1;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.3rem;
    letter-spacing: 1px;
  }
`;

const JobTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--primary-color);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: var(--heading-font);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const DescriptionText = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--text-color);
  margin: 0;
  opacity: 0.85;
  line-height: 1.6;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const PhotoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: ${float} 6s ease-in-out infinite;
`;

const SectionTitle = styled.h3`
  font-size: 2.5rem;
  color: var(--primary-color);
  text-align: center;
  margin-bottom: 3rem;
  font-family: var(--heading-font);
`;

// Plans Section
const PlansSection = styled.section`
  margin-top: 5rem;
  margin-bottom: 5rem;
  width: 100%;
`;

const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  max-width: 1100px;
  margin: 2rem auto 0;
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const PlanCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s ease;
  backdrop-filter: blur(15px);
  width: 100%;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary-color);
    box-shadow: 0 15px 40px rgba(201, 139, 94, 0.15);
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const BestValueBadge = styled.div`
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  color: #ffffff;
  padding: 0.6rem 1.5rem;
  border-radius: 30px;
  font-weight: 700;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(168, 103, 74, 0.35);
`;

const PlanHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PlanTitle = styled.h4`
  font-size: 1.8rem;
  color: #ffffff;
  margin-bottom: 1.2rem;
  font-family: var(--heading-font);
  line-height: 1.3;
`;

const PlanPrice = styled.div`
  font-size: 4rem;
  font-weight: 800;
  color: var(--primary-color);
  margin-bottom: 0.8rem;
  font-family: var(--heading-font);
  letter-spacing: -1px;

  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

const PlanDescription = styled.p`
  color: var(--text-color);
  opacity: 0.8;
  font-size: 1.05rem;
  margin: 0 auto;
  max-width: 700px;
  text-align: center;
  line-height: 1.6;
`;

const PlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2.5rem 0;
  flex-grow: 1;
`;

const PlanFeature = styled.li`
  margin-bottom: 1.2rem;
  color: var(--text-color);
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 1.05rem;
  opacity: 0.95;
  line-height: 1.4;

  &::before {
    content: '✓';
    color: var(--primary-color);
    font-weight: bold;
    font-size: 1.1rem;
    margin-top: 1px;
  }
`;

const PlanFooter = styled.div`
  margin-top: auto;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 1rem;
  color: var(--text-color);
  opacity: 0.85;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;

  svg {
    color: var(--primary-color);
    font-size: 1.2rem;
  }
`;

const MaintenanceBanner = styled.div`
  max-width: 1000px;
  margin: 2rem auto 0;
  background: linear-gradient(135deg, rgba(201, 139, 94, 0.1), rgba(227, 201, 174, 0.05));
  border: 1px solid rgba(201, 139, 94, 0.2);
  border-radius: 20px;
  padding: 1.8rem;
  backdrop-filter: blur(10px);
`;

const BannerContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

const BannerIcon = styled.div`
  font-size: 2.5rem;
  color: var(--primary-color);
  display: flex;
  align-items: center;
`;

const BannerText = styled.div`
  flex: 1;
`;

const BannerTitle = styled.h4`
  color: #ffffff;
  margin: 0 0 0.5rem 0;
  font-size: 1.3rem;
  font-family: var(--heading-font);
`;

const BannerDescription = styled.p`
  color: var(--text-color);
  margin: 0;
  font-size: 0.95rem;
  opacity: 0.85;
  max-width: 100%;
  line-height: 1.6;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  @media (max-width: 768px) {
    align-items: center;
    margin-top: 1rem;
    width: 100%;
  }
`;

const AnnualPrice = styled.div`
  font-size: 2rem;
  color: #ffffff;
  font-weight: 800;
  font-family: var(--heading-font);
  line-height: 1;

  span {
    font-size: 1rem;
    font-weight: 500;
    opacity: 0.7;
  }
`;

const MonthlyBreakdown = styled.div`
  font-size: 1.3rem;
  color: var(--primary-color);
  font-weight: 700;
  font-family: var(--heading-font);
`;

// Clarifications Section
const ClarificationsSection = styled.section`
  margin-top: 5rem;
  margin-bottom: 3rem;
  padding-top: 3rem;
  padding-bottom: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const ClarificationText = styled.p`
  color: var(--text-color);
  opacity: 0.75;
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  max-width: 850px;
  margin-left: auto;
  margin-right: auto;
  text-align: justify;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 1rem;
  width: 100%;
`;

const Feature = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-color);
  opacity: 0.9;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(201, 139, 94, 0.1);
  }

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 0.95rem;
    text-align: left;
  }
`;
