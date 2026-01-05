import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [diameter, setDiameter] = useState(100);
  const [depth, setDepth] = useState(200);
  const [quantity, setQuantity] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const calculatePrice = () => {
    const basePrice = 500;
    const depthMultiplier = depth / 100;
    const diameterMultiplier = diameter / 50;
    return Math.round(basePrice * depthMultiplier * diameterMultiplier * quantity);
  };

  const services = [
    {
      id: 'concrete',
      title: 'Бетон и железобетон',
      description: 'Бурение отверстий в бетонных и железобетонных конструкциях любой прочности',
      icon: 'Layers',
      features: ['До 500 мм диаметром', 'Любая глубина', 'Точность ±2 мм']
    },
    {
      id: 'brick',
      title: 'Кирпич и камень',
      description: 'Профессиональное бурение кирпичных стен и каменных конструкций',
      icon: 'Box',
      features: ['Без трещин', 'Контроль пыли', 'Сохранность кладки']
    },
    {
      id: 'panel',
      title: 'Панельные дома',
      description: 'Бурение в панельных домах с учетом всех технических особенностей',
      icon: 'Building2',
      features: ['Обход арматуры', 'Безопасность конструкции', 'Минимум шума']
    },
    {
      id: 'engineering',
      title: 'Инженерные системы',
      description: 'Прокладка коммуникаций: вентиляция, водопровод, электрика',
      icon: 'Wrench',
      features: ['Точная разметка', 'Соответствие ГОСТ', 'Чистая работа']
    }
  ];

  const portfolio = [
    {
      title: 'ЖК Новая Волна',
      description: 'Бурение 120 отверстий для системы вентиляции в жилом комплексе',
      details: 'Диаметр: 225 мм, Глубина: до 800 мм',
      type: 'Жилой комплекс',
      image: 'https://cdn.poehali.dev/projects/a0e91664-0131-41c6-abba-22e60c28be34/files/26d96836-d648-477e-993e-439539f1131b.jpg'
    },
    {
      title: 'ТЦ Метрополис',
      description: 'Монтаж системы кондиционирования в торговом центре',
      details: 'Диаметр: 400 мм, Глубина: до 1200 мм',
      type: 'Коммерческий объект',
      image: 'https://cdn.poehali.dev/projects/a0e91664-0131-41c6-abba-22e60c28be34/files/3de97e57-5ebc-4e7b-8b2d-849d97a119b3.jpg'
    },
    {
      title: 'Офис Tech Hub',
      description: 'Прокладка кабельных каналов и вентиляционных систем',
      details: 'Диаметр: 150 мм, Глубина: до 600 мм',
      type: 'Офисное здание',
      image: 'https://cdn.poehali.dev/projects/a0e91664-0131-41c6-abba-22e60c28be34/files/0e9968d5-18f8-4714-821c-669006e0280b.jpg'
    },
    {
      title: 'Частный дом',
      description: 'Установка системы отопления и водоснабжения',
      details: 'Диаметр: 100-200 мм, Глубина: до 500 мм',
      type: 'Частный сектор',
      image: 'https://cdn.poehali.dev/projects/a0e91664-0131-41c6-abba-22e60c28be34/files/26d96836-d648-477e-993e-439539f1131b.jpg'
    }
  ];

  const equipment = [
    {
      name: 'Hilti DD 350',
      description: 'Алмазная сверлильная система для отверстий до 350 мм',
      power: '3500 Вт',
      maxDiameter: '350 мм'
    },
    {
      name: 'Husqvarna DM 650',
      description: 'Мощная установка для бурения отверстий большого диаметра',
      power: '6500 Вт',
      maxDiameter: '650 мм'
    },
    {
      name: 'Makita DBM131',
      description: 'Портативная сверлильная машина для точных работ',
      power: '1800 Вт',
      maxDiameter: '132 мм'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Drill" className="text-primary" size={32} />
            <span className="text-xl md:text-2xl font-bold text-primary font-heading">АлмазБур</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#equipment" className="hover:text-primary transition-colors">Оборудование</a>
            <a href="#calculator" className="hover:text-primary transition-colors">Калькулятор</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="hidden md:flex">
            <Icon name="Phone" size={16} className="mr-2" />
            Позвонить
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </Button>
        </nav>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="#services" className="hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Услуги</a>
              <a href="#portfolio" className="hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Портфолио</a>
              <a href="#about" className="hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>О нас</a>
              <a href="#equipment" className="hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Оборудование</a>
              <a href="#calculator" className="hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Калькулятор</a>
              <a href="#contacts" className="hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Контакты</a>
              <Button className="w-full">
                <Icon name="Phone" size={16} className="mr-2" />
                Позвонить
              </Button>
            </div>
          </div>
        )}
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading leading-tight">
                Алмазное бурение
                <span className="text-primary"> отверстий</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Профессиональное бурение в бетоне, кирпиче и железобетоне. Точность, скорость и чистота работ.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" className="text-primary" size={20} />
                  <span className="text-sm md:text-base">Опыт 15+ лет</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" className="text-primary" size={20} />
                  <span className="text-sm md:text-base">Гарантия качества</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" className="text-primary" size={20} />
                  <span className="text-sm md:text-base">Работаем 24/7</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base md:text-lg w-full sm:w-auto">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="text-base md:text-lg w-full sm:w-auto">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Консультация
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in-up hidden md:block">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center">
                <Icon name="Drill" className="text-primary opacity-20" size={300} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading">Наши услуги</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Выполняем все виды алмазного бурения с применением современного оборудования
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-primary" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading">Наши проекты</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Более 500 успешно завершённых объектов по всей России
            </p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {portfolio.map((project, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/95 px-3 py-1 rounded-full text-sm font-medium">
                      {project.type}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl font-heading">{project.title}</CardTitle>
                  <CardDescription className="text-sm md:text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Info" size={16} />
                    {project.details}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-heading">О компании</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Мы специализируемся на алмазном бурении отверстий более 15 лет. За это время выполнили более 500 проектов различной сложности — от частных домов до крупных торговых центров.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Наша команда состоит из квалифицированных специалистов с большим опытом работы. Мы используем только современное оборудование ведущих мировых производителей.
              </p>
              <div className="grid grid-cols-3 gap-4 md:gap-6">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-xs md:text-sm text-muted-foreground">гарантия</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: 'Award', title: 'Сертифицированные специалисты', desc: 'Все сотрудники имеют необходимые допуски и сертификаты' },
                { icon: 'Shield', title: 'Гарантия качества', desc: 'Предоставляем гарантию на все выполненные работы' },
                { icon: 'Clock', title: 'Работаем круглосуточно', desc: 'Выполняем заказы в удобное для вас время' },
                { icon: 'TrendingDown', title: 'Прозрачное ценообразование', desc: 'Фиксированная стоимость без скрытых платежей' }
              ].map((item, idx) => (
                <Card key={idx} className="border-l-4 border-l-primary">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name={item.icon as any} className="text-primary" size={24} />
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-1">{item.title}</CardTitle>
                        <CardDescription>{item.desc}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="equipment" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading">Наше оборудование</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Используем только профессиональное оборудование от ведущих мировых производителей
            </p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {equipment.map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-full aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name="Drill" className="text-primary" size={80} />
                  </div>
                  <CardTitle className="text-xl font-heading">{item.name}</CardTitle>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Мощность:</span>
                      <span className="font-semibold">{item.power}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Макс. диаметр:</span>
                      <span className="font-semibold">{item.maxDiameter}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading">Калькулятор стоимости</h2>
            <p className="text-lg md:text-xl text-muted-foreground px-4">
              Рассчитайте примерную стоимость работ онлайн
            </p>
          </div>
          <Card className="shadow-2xl">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Параметры бурения</CardTitle>
              <CardDescription className="text-sm md:text-base">Укажите требуемые параметры для расчёта стоимости</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="diameter">Диаметр отверстия: {diameter} мм</Label>
                <input 
                  id="diameter"
                  type="range" 
                  min="50" 
                  max="650" 
                  step="10"
                  value={diameter}
                  onChange={(e) => setDiameter(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="depth">Глубина бурения: {depth} мм</Label>
                <input 
                  id="depth"
                  type="range" 
                  min="50" 
                  max="1500" 
                  step="50"
                  value={depth}
                  onChange={(e) => setDepth(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Количество отверстий</Label>
                <Input 
                  id="quantity"
                  type="number" 
                  min="1" 
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="text-lg"
                />
              </div>
              <div className="bg-primary/10 rounded-xl p-4 md:p-6 mt-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <span className="text-lg md:text-xl font-semibold">Примерная стоимость:</span>
                  <span className="text-2xl md:text-3xl font-bold text-primary">{calculatePrice().toLocaleString()} ₽</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  * Окончательная цена определяется после осмотра объекта
                </p>
              </div>
              <Button size="lg" className="w-full text-base md:text-lg">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading">Контакты</h2>
            <p className="text-lg md:text-xl text-muted-foreground px-4">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">Свяжитесь с нами</CardTitle>
                <CardDescription className="text-sm md:text-base">Заполните форму и мы перезвоним в течение 15 минут</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Иван Иванов" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea id="message" placeholder="Опишите ваш проект..." rows={4} />
                </div>
                <Button size="lg" className="w-full text-base md:text-lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-2">Телефон</CardTitle>
                      <p className="text-2xl font-bold text-primary">+7 (999) 123-45-67</p>
                      <p className="text-sm text-muted-foreground mt-1">Работаем 24/7</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-2">Email</CardTitle>
                      <p className="text-lg font-semibold">info@almazbur.ru</p>
                      <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-2">Адрес</CardTitle>
                      <p className="text-lg font-semibold">г. Москва, ул. Строительная, 15</p>
                      <p className="text-sm text-muted-foreground mt-1">Пн-Вс: 24/7</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Drill" size={28} />
                <span className="text-xl font-bold font-heading">АлмазБур</span>
              </div>
              <p className="text-gray-400 text-sm">
                Профессиональное алмазное бурение отверстий с 2009 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-heading">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Бурение бетона</li>
                <li>Бурение кирпича</li>
                <li>Панельные дома</li>
                <li>Инженерные системы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-heading">Информация</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>О компании</li>
                <li>Наши проекты</li>
                <li>Оборудование</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-heading">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (999) 123-45-67</li>
                <li>info@almazbur.ru</li>
                <li>г. Москва, ул. Строительная, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 АлмазБур. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}