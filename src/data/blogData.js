export const blogPosts = [
  {
    id: 1,
    title: "Clean Architecture: Organizando un poco el quilombo",
    slug: "ordenando-el-quilombo-clean-arquitecture",
    excerpt:
      "Clean Architecture puede transformar tu forma de desarrollar software, creando aplicaciones mantenibles, escalables y adaptables al cambio.",
    content: `
  <h2>¿Por qué te conviene dejar de hacer todo en el mismo archivo?</h2>
  
  <p>Muchas veces nuestro código termina hecho un quilombo. Clean Architecture es como tu vieja que te dice “che, ordená un poco esto” y te da una mano para que tu app no explote en dos semanas.</p>
  
  <h3>1. Separá los tantos</h3>
  <p>No mezcles la lógica de negocio con la interfaz. Es como hacer fideos y meterlos al horno con helado: raro y difícil de mantener. Si ponés todo en un solo componente, después ni vos vas a entender lo qué hiciste.</p>
  
  <h4>Ejemplo en código (con yapa):</h4>
  <pre><code>// ❌ Mal: Todo mezclado como guiso de domingo
function UserComponent() {
  const [user, setUser] = useState(null);

  const handleLogin = async (credentials) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(credentials)
      });
      const data = await response.json();
      setUser(data);
      localStorage.setItem('token', data.token);
    } catch (error) {
      // Error handling
    }
  };

  return &lt;div&gt;{/* UI code */}&lt;/div&gt;;
}

// ✅ Bien: Cada cosa en su lugar
// Capa de Dominio
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  isValid() {
    return this.email.includes('@') && this.name.length > 0;
  }
}

// Caso de uso
class LoginUseCase {
  constructor(userRepository, authService) {
    this.userRepository = userRepository;
    this.authService = authService;
  }

  async execute(credentials) {
    const user = await this.userRepository.findByEmail(credentials.email);
    if (user && user.isValid()) {
      return this.authService.authenticate(user);
    }
    throw new Error('Credenciales inválidas');
  }
}

// Presentación (UI)
function UserComponent() {
  const loginUseCase = new LoginUseCase(userRepo, authService);

  const handleLogin = async (credentials) => {
    try {
      const result = await loginUseCase.execute(credentials);
      // Acá solo manejamos la UI
    } catch (error) {
      // Y los errores, obvio
    }
  };

  return &lt;div&gt;{/* UI code */}&lt;/div&gt;;
}</code></pre>

  <h3>2. Que el core no dependa de nadie (como vos en el laburo ideal)</h3>
  <p>La parte más importante de tu app —las reglas de negocio— tiene que ser independiente. Que no se te mezcle con React, Express ni ninguna otra yerba rara. Eso te permite cambiar lo de afuera sin romper lo de adentro.</p>

  <h4>Un ejemplo bien puro:</h4>
  <pre><code>// Dominio limpio y sin frameworks
class Order {
  constructor(id, items, customer) {
    this.id = id;
    this.items = items;
    this.customer = customer;
    this.status = 'pending';
  }

  calculateTotal() {
    return this.items.reduce((total, item) =>
      total + (item.price * item.quantity), 0
    );
  }

  canBeCancelled() {
    return this.status === 'pending' || this.status === 'confirmed';
  }

  cancel() {
    if (!this.canBeCancelled()) {
      throw new Error('No se puede cancelar esta orden');
    }
    this.status = 'cancelled';
  }
}
// Sin React, sin base de datos, sin nada raro
</code></pre>

  <h3>3. Adaptadores: los que hacen el trabajo sucio</h3>
  <p>Los adaptadores son los que se bancan las conexiones con el mundo exterior: base de datos, APIs, frameworks. La lógica no se ensucia con eso, queda limpia y tranquila.</p>

  <h4>Implementación de adaptadores:</h4>
  <pre><code>// Interfaz
interface UserRepository {
  findById(id: string): Promise&lt;User&gt;;
  save(user: User): Promise&lt;void&gt;;
}

// Adaptador para base de datos
class DatabaseUserRepository implements UserRepository {
  constructor(private db: Database) {}

  async findById(id: string): Promise&lt;User&gt; {
    const data = await this.db.query('SELECT * FROM users WHERE id = ?', [id]);
    return new User(data.id, data.name, data.email);
  }

  async save(user: User): Promise&lt;void&gt; {
    await this.db.query(
      'INSERT INTO users (id, name, email) VALUES (?, ?, ?)',
      [user.id, user.name, user.email]
    );
  }
}

// Otro adaptador, para una API externa
class ExternalAPIUserRepository implements UserRepository {
  constructor(private apiClient: HttpClient) {}

  async findById(id: string): Promise&lt;User&gt; {
    const response = await this.apiClient.get(\`/api/users/\${id}\`);
    return new User(response.id, response.name, response.email);
  }

  async save(user: User): Promise&lt;void&gt; {
    await this.apiClient.post('/api/users', {
      id: user.id,
      name: user.name,
      email: user.email
    });
  }
}</code></pre>

  <h3>4. Que todo sea flexible</h3>
  <p>Clean Architecture te da esa flexibilidad para cambiar cosas sin que todo se venga abajo. ¿Querés cambiar la forma de pagar? ¿Cambiar la base? No hay drama si está bien armado.</p>

  <h4>Ejemplo con inversión de dependencias:</h4>
  <pre><code>// El servicio no depende de detalles
class OrderService {
  constructor(
    private orderRepository: OrderRepository,
    private paymentGateway: PaymentGateway,
    private notificationService: NotificationService
  ) {}

  async processOrder(order: Order): Promise&lt;OrderResult&gt; {
    if (!order.isValid()) {
      throw new Error('Orden inválida');
    }

    const payment = await this.paymentGateway.process(order.calculateTotal());
    if (payment.success) {
      await this.orderRepository.save(order);
      await this.notificationService.notify(order.customer);
      return { success: true, orderId: order.id };
    }

    return { success: false, error: 'Pago fallido' };
  }
}

// Le inyectás las implementaciones concretas
const orderService = new OrderService(
  new DatabaseOrderRepository(db),
  new StripePaymentGateway(stripeConfig),
  new EmailNotificationService(emailConfig)
);</code></pre>

  <h3>5. Mantenimiento sin sufrir</h3>
  <p>Cuando tenés todo ordenado, mantenerlo es mucho más fácil. Podés testear, refactorizar, escalar y dormir tranquilo. Porque sabés que tu código no es una bomba a punto de explotar.</p>

  <h4>Una estructura que no te va a fallar:</h4>
  <pre><code>src/
├── domain/           # Reglas de negocio, bien limpitas
│   ├── entities/
│   ├── value-objects/
│   └── services/
├── application/      # Casos de uso, sin drama
│   ├── use-cases/
│   ├── interfaces/
│   └── dtos/
├── infrastructure/   # Lo de afuera, donde puede haber bardito
│   ├── repositories/
│   ├── external-apis/
│   └── frameworks/
└── presentation/     # UI, rutas, etc.
    ├── components/
    ├── pages/
    └── controllers/</code></pre>

  <h2>Conclusión</h2>
  <p>Si querés hacer software que no te haga sufrir mañana, Clean Architecture es un golazo. Te da una buena estructura para pensar en serio cómo organizás tu código.</p>

  <p>No se trata solo de que funcione hoy. Se trata de que puedas agregar nuevas features sin llorar, cambiar cosas sin romper todo, y que tu equipo no quiera prender fuego el repo.</p>

  <p>Así que ya sabés: metele Clean Architecture y vas a ver cómo el quilombo se empieza a ordenar solito.</p>
`,
    author: "Teo Chiappero",
    date: "10 Jul 2025",
    readTime: "8 min",
    category: "Clean Code",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop",
    tags: [
      "Clean Architecture",
      "Arquitectura de Software",
      "Patrones de Diseño",
      "Mantenibilidad",
      "Escalabilidad",
    ],
  },
  {
    id: 2,
    title: "Container Pattern: Estructura para tu Frontend",
    slug: "container-pattern-estructura",
    excerpt:
      "Descubrí cómo el Container Pattern puede ayudarte a organizar tu código de forma natural y escalable, sin estructuras rígidas que te compliquen la vida.",
    content: `
      <h2>¿Por qué necesitás organizar mejor tu código?</h2>
      
      <p>Cuando empezás un proyecto, todo parece simple. Pero a medida que crece, tu código se convierte en un laberinto donde ni vos mismo sabés dónde está cada cosa. El Container Pattern te da una forma natural de organizar todo sin volverte loco.</p>
      
      <h3>🚫 No te compliques desde el principio</h3>
      <p>No soy fan de estructuras rígidas desde el día uno. La estructura debe surgir de las necesidades reales del proyecto y del equipo. Dejá que evolucione naturalmente.</p>
      
      <h3>✅ Enfoque orgánico</h3>
      <p>En lugar de forzar una estructura perfecta desde el inicio, preferimos un enfoque más orgánico. La idea es que la estructura del proyecto evolucione naturalmente a medida que crecen los requerimientos.</p>
      
      <h2>🔌 Services y Adapters: Los que hacen el trabajo pesado</h2>
      
      <h3>Services</h3>
      <p>Los <strong>Services</strong> son los que se encargan de hablar con el mundo exterior (APIs, bases de datos, etc.). Van en una carpeta llamada <code>services</code>.</p>
      
      <p><strong>Responsabilidades:</strong></p>
      <ul>
        <li>Enviar y recibir datos del mundo exterior</li>
        <li>Manejar la comunicación con APIs</li>
        <li>Gestionar la lógica de negocio externa</li>
      </ul>
      
      <h3>Adapters</h3>
      <p>Los <strong>Adapters</strong> van en la carpeta <code>adapters</code> dentro de cada módulo. Son como traductores entre tu código y el mundo exterior.</p>
      
      <p><strong>Responsabilidades:</strong></p>
      <ul>
        <li>Mapear datos entre formatos externos e internos</li>
        <li>Asegurar comunicación fluida entre afuera y adentro</li>
        <li>Proteger tu dominio de cambios externos</li>
      </ul>
      
      <h2>🧱 Container Pattern: Todo junto y bien organizado</h2>
      
      <p>En lugar de tener componentes y lógica dispersos por todos lados, el <strong>Container Pattern</strong> agrupa todo lo relacionado con una funcionalidad en una sola carpeta.</p>
      
      <h3>Ejemplo: Gestión de Usuarios</h3>
      <pre><code>UserManagement/
├── components/
│   ├── UserProfile.js
│   └── UserList.js
├── hooks/
│   ├── useUserSearch.js
│   └── useUserProfile.js
├── models/
│   └── UserModel.js
├── services/
│   └── UserService.js
├── adapters/
│   └── UserAdapter.js
└── UserContainer.js  // Componente principal</code></pre>
      
      <h3>¿Cómo funciona?</h3>
      <ul>
        <li><strong>Encapsulación:</strong> Cada container maneja su propio estado y dependencias</li>
        <li><strong>Independencia:</strong> No necesitás otros módulos para trabajar en uno</li>
        <li><strong>Reutilización:</strong> Podés reutilizar containers en diferentes partes</li>
        <li><strong>Lazy Loading:</strong> Cargás containers solo cuando los necesitás</li>
      </ul>
      
      <h2>🛒 Ejemplo práctico: E-commerce</h2>
      
      <p>Imaginá que estás construyendo una tienda online. Acá te muestro cómo quedaría la estructura:</p>
      
      <pre><code>src/
├── products/
│   ├── ProductsContainer.js
│   ├── components/
│   │   ├── ProductList.js
│   │   └── ProductItem.js
│   ├── services/
│   │   └── ProductService.js
│   └── adapters/
│       └── ProductAdapter.js

├── cart/
│   ├── CartContainer.js
│   ├── components/
│   │   ├── CartView.js
│   │   └── CartItem.js
│   ├── services/
│   │   └── CartService.js
│   └── adapters/
│       └── CartAdapter.js

├── checkout/
│   ├── CheckoutContainer.js
│   ├── components/
│   │   ├── PaymentForm.js
│   │   └── OrderSummary.js
│   ├── services/
│   │   └── PaymentService.js
│   └── adapters/
│       └── PaymentAdapter.js</code></pre>
      
      <h3>Implementación básica de un Container</h3>
      <pre><code>// ProductsContainer.js
import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import ProductService from './services/ProductService';
import ProductAdapter from './adapters/ProductAdapter';

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const productService = new ProductService();
  const productAdapter = new ProductAdapter();
  
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const rawData = await productService.getProducts();
        const adaptedProducts = productAdapter.adapt(rawData);
        setProducts(adaptedProducts);
      } catch (error) {
        // Error handling
      } finally {
        setLoading(false);
      }
    };
    
    loadProducts();
  }, []);
  
  if (loading) return &lt;div&gt;Cargando productos...&lt;/div&gt;;
  
  return &lt;ProductList products={products} /&gt;;
};

export default ProductsContainer;</code></pre>
      
      <h2>✅ Beneficios del Container Pattern</h2>
      
      <ul>
        <li><strong>Mejor organización:</strong> Código más limpio y modular</li>
        <li><strong>Acoplamiento débil:</strong> Menos dependencias cruzadas</li>
        <li><strong>Escalabilidad:</strong> Agregás módulos sin romper los existentes</li>
        <li><strong>Mantenimiento fácil:</strong> Todo lo que necesitás está en un lugar</li>
        <li><strong>Testing simplificado:</strong> Cada container es independiente</li>
      </ul>
      
      <h2>🚀 Cuándo usar este patrón</h2>
      
      <p>El Container Pattern es ideal cuando:</p>
      <ul>
        <li>Tu aplicación tiene funcionalidades bien definidas</li>
        <li>Querés mantener el código organizado sin complicarte</li>
        <li>Trabajás en equipo y necesitás separar responsabilidades</li>
        <li>Tu proyecto está creciendo y necesitás escalabilidad</li>
      </ul>
      
      <h2>Conclusión</h2>
      
      <p>El Container Pattern no es la solución a todos los problemas, pero sí te da una forma práctica y natural de organizar tu código. No te obsesiones con la estructura perfecta desde el día uno. Dejá que evolucione con tu proyecto.</p>
      
      <p>La clave está en encontrar el balance entre organización y simplicidad. Si tu código está ordenado y podés encontrar las cosas fácilmente, ya estás en el camino correcto.</p>
      
      <p>Al final del día, lo importante es que tu código sea mantenible y que tu equipo pueda trabajar sin volverse loco. El Container Pattern te ayuda a lograr eso de forma natural.</p>
    `,
    author: "Teo Chiappero",
    date: "18 Jul 2025",
    readTime: "5 min",
    category: "Patrones de Diseño",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
    tags: [
      "Container Pattern",
      "Arquitectura",
      "Organización de Código",
      "React",
      "Escalabilidad",
    ],
  },
    {
    id: 3,
    title: "El Futuro del Frontend: ¿Sigue existiendo el \"frontend\"?",
    slug: "el-futuro-del-frontend",
    excerpt:
      "La web ya no es lo que era. El desarrollo frontend está atravesando una transformación profunda que mezcla diseño, programación, inteligencia artificial y experiencia de usuario en un solo paquete.",
    content: `
      <h2>La web ya no es lo que era. Y eso está bien.</h2>
      
      <p>Hace unos años, hablar de "frontend" era hablar de HTML, CSS, y algo de JavaScript para mover botones o cargar datos. Hoy, ese concepto se queda corto. El desarrollo frontend está atravesando una transformación profunda que mezcla diseño, programación, inteligencia artificial y experiencia de usuario en un solo paquete. Y lo más loco: no sabemos hasta dónde va a llegar.</p>
      
      <p>Acá te compartimos algunas ideas sobre hacia dónde va el frontend (si es que ese término sigue teniendo sentido).</p>
      
      <h2>⏱ El rendimiento ya no es opcional</h2>
      <p>Los usuarios están cada vez más impacientes. Si tu sitio tarda más de 3 segundos en cargar, lo más probable es que se vayan. Y si se van, Google también te castiga en SEO.</p>
      
      <p>Por eso, el rendimiento se volvió prioridad número uno. Frameworks como Next.js, Astro o Qwik están diseñados justamente para optimizar carga, minimizar JavaScript y servir contenido de forma más eficiente.</p>
      
      <h3>¿La clave? Edge Computing</h3>
      <p>El contenido ya no se sirve solo desde servidores centrales. Hoy, se distribuye en CDNs y funciones serverless que corren más cerca del usuario. Esto no solo reduce el tiempo de carga, sino que mejora la experiencia de forma general.</p>
      
      <h2>🤖 Interfaces inteligentes: la era del frontend adaptativo</h2>
      <p>Con la llegada de herramientas como TensorFlow.js, estamos empezando a ver una web que aprende del usuario en tiempo real.</p>
      
      <h3>¿Ejemplos? Un sitio que:</h3>
      <ul>
        <li>Cambia el tamaño de la tipografía si nota fatiga visual.</li>
        <li>Reordena secciones según cómo scrolleás.</li>
        <li>Ajusta contraste, colores o animaciones según tu ritmo de navegación.</li>
      </ul>
      
      <p>No es ciencia ficción. Ya hay experimentos y prototipos que hacen esto. La interfaz deja de ser estática y empieza a adaptarse a vos.</p>
      
      <h2>📺 Más allá del navegador: el frontend se mete en todo</h2>
      <p>Ya no desarrollamos solo para la web clásica. Hoy un/a frontend developer puede terminar trabajando en:</p>
      
      <ul>
        <li><strong>📱 Aplicaciones mobile</strong> (React Native, PWAs)</li>
        <li><strong>📺 Interfaces para Smart TVs</strong></li>
        <li><strong>🚗 Dashboards de autos</strong></li>
        <li><strong>🧠 Pantallas IoT</strong></li>
        <li><strong>💡 Sistemas de diseño colaborativos</strong></li>
        <li><strong>🖥 Renderizado isomórfico</strong> (React Server Components, Remix, etc.)</li>
      </ul>
      
      <p>Cada vez más, el frontend toca el backend, el diseño, la UX, y hasta la arquitectura de sistemas. La separación clásica entre "cliente y servidor" empieza a romperse.</p>
      
      <h2>🎨 Diseño + código + AI = el nuevo combo fullstack</h2>
      <p>Lo que antes era un flujo lineal de trabajo (diseñador hace Figma → dev implementa) hoy se vuelve colaborativo y en tiempo real. Incluso empiezan a surgir herramientas donde el diseño y el código conviven, como:</p>
      
      <ul>
        <li>Design systems con tokens compartidos.</li>
        <li>Estilos generados automáticamente según comportamiento del usuario.</li>
        <li>Temas oscuros/claro que no solo cambian colores, sino también estructura y prioridad visual.</li>
      </ul>
      
      <p>El desarrollador frontend ahora piensa como diseñador, y el diseñador entiende código.</p>
      
      <h2>🧭 ¿Sigue existiendo el "frontend"?</h2>
      <p>Tal vez no por mucho tiempo.</p>
      
      <p>Lo que estamos viendo es que el desarrollo web se está unificando. Ya no importa tanto si sos "frontend" o "backend", sino qué experiencia estás creando y cómo la hacés performante, accesible, adaptable y mantenible.</p>
      
      <p>¿Estamos ante el fin del "frontend" como rol separado? Quizás. O quizás simplemente lo estamos renombrando. Algunos ya lo llaman web development a secas.</p>
      
      <h2>🛸 Lo que viene (spoiler: nadie lo sabe)</h2>
      <p>En los próximos 30 años vamos a ver cambios que hoy ni imaginamos: interfaces controladas por voz, diseño generado por IA, apps que se adaptan a tu entorno físico, o código que se escribe solo según cómo usás la app.</p>
      
      <p>Pero si hay algo que no va a cambiar es esto: vamos a necesitar curiosidad, creatividad y pasión para seguir entendiendo qué viene después. Porque la historia del frontend —o del desarrollo web— todavía se está escribiendo. Y nosotros somos los que la escribimos.</p>
      
      <h2>¿Querés sumarte a esta evolución?</h2>
      <p>En SurCode nos encanta hablar de estas cosas. Si te interesa el rendimiento, la accesibilidad, la arquitectura de apps modernas o simplemente querés ser parte del futuro del desarrollo, hablá con nosotros. 🚀</p>
    `,
    author: "SurCode",
    date: "12 Ago 2025",
    readTime: "6 min",
    category: "Frontend Development",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop", // Imagen futurista de código y tecnología
    tags: ["Frontend", "Web Development", "AI", "Performance", "Future Tech", "UX/UI"],
  },
  {
    id: 4,
    title: "Mobile First: Por qué el celular se comió la PC",
    slug: "mobile-first",
    excerpt:
      "Descubrí cómo el uso móvil superó a la PC y por qué el responsive design ya no es opcional para tu proyecto web.",
    content: `
      <h2>¿Cuándo fue la última vez que usaste una PC?</h2>
      
      <p>Si sos como la mayoría de la gente, probablemente estés leyendo esto desde tu celular. Y no es casualidad. El mundo cambió y el móvil se convirtió en el rey indiscutible de internet. Acá te cuento por qué pasó esto y por qué tu proyecto web necesita ser mobile-first.</p>
      
      <h3>📱 Los números que te van a sorprender</h3>
      
      <p>En 2024, más del <strong>70% del tráfico web</strong> viene de dispositivos móviles. Sí, leíste bien. 7 de cada 10 personas navegan desde su celular. Y esto no es una tendencia, es la nueva normalidad.</p>
      
      <ul>
        <li><strong>2010:</strong> Solo 3% del tráfico era móvil</li>
        <li><strong>2015:</strong> Ya era el 35%</li>
        <li><strong>2020:</strong> Llegó al 55%</li>
        <li><strong>2024:</strong> Superó el 70%</li>
      </ul>
      
      <h3>🚀 ¿Por qué pasó esto?</h3>
      
      <p>La revolución móvil no fue casual. Varios factores se juntaron para crear el cambio perfecto:</p>
      
      <h4>1. Internet más rápido y barato</h4>
      <p>Con 4G y ahora 5G, navegar desde el celular es más rápido que nunca. Y los planes de datos son cada vez más accesibles.</p>
      
      <h4>2. Celulares más potentes</h4>
      <p>Tu celular de hoy es más potente que las PCs de hace 10 años. Puede hacer todo lo que necesitás: trabajar, estudiar, comprar, entretenerte.</p>
      
      <h4>3. Apps y webs optimizadas</h4>
      <p>Las empresas se dieron cuenta rápido. Si tu sitio no funciona bien en móvil, perdés clientes. Punto.</p>
      
      <h2>💡 Mobile-First: No es una moda, es supervivencia</h2>
      
      <p>Mobile-first significa diseñar primero para móvil y después adaptar para desktop. No al revés. Y hay razones de peso para hacerlo así.</p>
      
      <h3>Ventajas del enfoque Mobile-First:</h3>
      
      <ul>
        <li><strong>Mejor performance:</strong> Si funciona bien en móvil, va a volar en desktop</li>
        <li><strong>Contenido prioritario:</strong> Te obliga a pensar qué es realmente importante</li>
        <li><strong>Mejor SEO:</strong> Google prioriza sitios mobile-friendly</li>
        <li><strong>Menos código:</strong> Empiezas simple y vas agregando complejidad</li>
      </ul>
      
      <h3>❌ Errores comunes que te van a costar usuarios</h3>
      
      <pre><code>/* ❌ Mal: Desktop-first */
.container {
  width: 1200px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .container {
    width: 100%;
    padding: 10px;
  }
}

/* ✅ Bien: Mobile-first */
.container {
  width: 100%;
  padding: 20px;
  max-width: 100%;
}

@media (min-width: 768px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px;
  }
}</code></pre>
      
      <h2>📊 Casos reales que te van a convencer</h2>
      
      <h3>Netflix</h3>
      <p>En 2020, Netflix reportó que el <strong>70% de sus usuarios</strong> veían contenido desde móviles. Por eso su app móvil es tan buena.</p>
      
      <h3>Amazon</h3>
      <p>Amazon vio que el <strong>60% de sus ventas</strong> venían de móviles. Ahora su experiencia móvil es prioritaria.</p>
      
      <h3>Instagram</h3>
      <p>Instagram nació móvil y nunca miró atrás. El <strong>90% de su tráfico</strong> es móvil. ¿Casualidad?</p>
      
      
      <h2>📱 Testing: No confíes solo en el emulador</h2>
      
      <p>El emulador está bien para desarrollo, pero necesitás probar en dispositivos reales:</p>
      
      <ul>
        <li><strong>Diferentes tamaños:</strong> iPhone SE hasta iPad Pro</li>
        <li><strong>Diferentes navegadores:</strong> Safari, Chrome, Firefox</li>
        <li><strong>Condiciones de red:</strong> 3G, 4G, WiFi lento</li>
        <li><strong>Usuarios reales:</strong> Pedí feedback a amigos/familia</li>
      </ul>
      
      <h2>🚀 Herramientas que te van a salvar</h2>
      
      <h3>Desarrollo</h3>
      <ul>
        <li><strong>Chrome DevTools:</strong> Simulación de dispositivos</li>
        <li><strong>Responsively App:</strong> Ver múltiples breakpoints</li>
        <li><strong>BrowserStack:</strong> Testing en dispositivos reales</li>
      </ul>
      
      <h3>Performance</h3>
      <ul>
        <li><strong>Lighthouse:</strong> Auditoría de performance móvil</li>
        <li><strong>PageSpeed Insights:</strong> Métricas de Google</li>
        <li><strong>WebPageTest:</strong> Testing en diferentes redes</li>
      </ul>
      
      <h2>💡 Tips prácticos para empezar ya</h2>
      
      <ol>
        <li><strong>Empezá con el viewport:</strong> Siempre incluye el meta viewport</li>
        <li><strong>Usá unidades relativas:</strong> rem, em, %, vw/vh</li>
        <li><strong>Optimizá imágenes:</strong> WebP, lazy loading, srcset</li>
        <li><strong>Testeá en móvil primero:</strong> Antes que en desktop</li>
        <li><strong>Pensá en touch:</strong> Botones grandes, espaciado adecuado</li>
      </ol>
      
      <h2>Conclusión</h2>
      
      <p>El móvil no es el futuro, es el presente. Si tu sitio web no funciona bien en celular, estás perdiendo usuarios y dinero. Punto.</p>
      
      <p>No importa si tu proyecto es chico o grande. Mobile-first ya no es opcional. Es la diferencia entre un proyecto que funciona y uno que se queda en el camino.</p>
      
      
      <p>El mundo cambió. Tu desarrollo web también tiene que cambiar. Mobile-first no es una tendencia, es la nueva realidad.</p>
    `,
    author: "Teo Chiappero",
    date: "25 Jul 2025",
    readTime: "7 min",
    category: "Responsive Design",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=250&fit=crop",
    tags: ["Mobile First", "Responsive Design", "UX/UI", "Performance", "Web Development"],
  },
];

export const getBlogPostById = (id) => {
  return blogPosts.find((post) => post.id === parseInt(id));
};

export const getBlogPostBySlug = (slug) => {
  return blogPosts.find((post) => post.slug === slug);
};


export const getBlogPostsByCategory = (category) => {
  return blogPosts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
};

export const getBlogPostsByTag = (tag) => {
  return blogPosts.filter((post) =>
    post.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
};
