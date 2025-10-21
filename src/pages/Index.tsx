import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Animal {
  id: number;
  name: string;
  scientificName: string;
  category: 'mammals' | 'birds';
  habitat: string;
  conservation: string;
  description: string;
  image: string;
  characteristics: string[];
}

const animals: Animal[] = [
  {
    id: 1,
    name: 'Африканский слон',
    scientificName: 'Loxodonta africana',
    category: 'mammals',
    habitat: 'Саванны и леса Африки',
    conservation: 'Уязвимый вид',
    description: 'Африканский слон — крупнейшее наземное млекопитающее на Земле. Взрослые самцы могут достигать веса до 6 тонн и высоты 4 метров. Слоны обладают высоким интеллектом, живут большими семейными группами и демонстрируют сложное социальное поведение.',
    image: 'https://cdn.poehali.dev/projects/cccc89c4-7f4e-422e-a287-d5f60739bc97/files/a190f5d3-45ca-4d5e-87a2-e1b1ca6da87e.jpg',
    characteristics: ['Вес: до 6 тонн', 'Продолжительность жизни: 60-70 лет', 'Питание: травоядные']
  },
  {
    id: 2,
    name: 'Бенгальский тигр',
    scientificName: 'Panthera tigris tigris',
    category: 'mammals',
    habitat: 'Леса и мангровые заросли Индии',
    conservation: 'Исчезающий вид',
    description: 'Бенгальский тигр — подвид тигра, обитающий на Индийском субконтиненте. Это один из крупнейших хищников семейства кошачьих. Тигры — одиночные охотники, контролирующие обширные территории. Их характерная полосатая окраска обеспечивает превосходную маскировку в высокой траве.',
    image: 'https://cdn.poehali.dev/projects/cccc89c4-7f4e-422e-a287-d5f60739bc97/files/c901b8bb-6fe9-4494-adff-1328acff631b.jpg',
    characteristics: ['Вес: 180-260 кг', 'Продолжительность жизни: 10-15 лет', 'Питание: плотоядные']
  },
  {
    id: 3,
    name: 'Белоголовый орлан',
    scientificName: 'Haliaeetus leucocephalus',
    category: 'birds',
    habitat: 'Побережья и водоёмы Северной Америки',
    conservation: 'Вызывающий наименьшие опасения',
    description: 'Белоголовый орлан — крупная хищная птица, национальный символ США. Размах крыльев может достигать 2,5 метров. Орланы питаются преимущественно рыбой, которую ловят, паря над водной поверхностью. Они строят огромные гнёзда на высоких деревьях, используя их многие годы.',
    image: 'https://cdn.poehali.dev/projects/cccc89c4-7f4e-422e-a287-d5f60739bc97/files/0c0f8863-8621-4d03-b318-8e3eac59ff2f.jpg',
    characteristics: ['Размах крыльев: 2-2.5 м', 'Продолжительность жизни: 20-30 лет', 'Питание: рыба, мелкие млекопитающие']
  },
  {
    id: 4,
    name: 'Горная горилла',
    scientificName: 'Gorilla beringei beringei',
    category: 'mammals',
    habitat: 'Горные леса Центральной Африки',
    conservation: 'Находящийся под угрозой исчезновения',
    description: 'Горная горилла обитает в горных лесах Центральной Африки на высоте до 4000 метров. Это один из крупнейших приматов, живущий в семейных группах под руководством доминантного самца-сребробрюхого. Гориллы питаются растительностью и проводят большую часть времени на земле.',
    image: 'https://images.unsplash.com/photo-1551155100-4da120a889e5?w=800',
    characteristics: ['Вес: 135-220 кг', 'Продолжительность жизни: 35-40 лет', 'Питание: травоядные']
  },
  {
    id: 5,
    name: 'Императорский пингвин',
    scientificName: 'Aptenodytes forsteri',
    category: 'birds',
    habitat: 'Антарктида',
    conservation: 'Близкий к уязвимому положению',
    description: 'Императорский пингвин — самый крупный и тяжёлый из всех видов пингвинов. Они размножаются в самых суровых условиях Антарктиды, переживая зимние температуры до -40°C. Самцы высиживают яйца в течение двух месяцев, не питаясь в это время.',
    image: 'https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?w=800',
    characteristics: ['Рост: 100-130 см', 'Продолжительность жизни: 15-20 лет', 'Питание: рыба, кальмары, криль']
  },
  {
    id: 6,
    name: 'Большая панда',
    scientificName: 'Ailuropoda melanoleuca',
    category: 'mammals',
    habitat: 'Бамбуковые леса Китая',
    conservation: 'Уязвимый вид',
    description: 'Большая панда — символ охраны дикой природы во всём мире. Несмотря на принадлежность к отряду хищных, панды почти исключительно питаются бамбуком, потребляя до 38 кг в день. Они ведут одиночный образ жизни и отличаются характерной чёрно-белой окраской.',
    image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800',
    characteristics: ['Вес: 70-125 кг', 'Продолжительность жизни: 20 лет', 'Питание: бамбук']
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'mammals' | 'birds'>('all');
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);

  const filteredAnimals = animals.filter(animal => {
    const matchesSearch = animal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         animal.scientificName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || animal.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-8 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Icon name="Leaf" size={40} />
            <h1 className="text-4xl md:text-5xl font-bold">Энциклопедия диких животных</h1>
          </div>
          <p className="text-lg opacity-90">Систематизированная информация о животном мире планеты</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Поиск животных по названию или научному имени..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-6 text-lg"
            />
          </div>

          <Tabs value={selectedCategory} onValueChange={(value) => setSelectedCategory(value as 'all' | 'mammals' | 'birds')} className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-12">
              <TabsTrigger value="all" className="text-base">
                <Icon name="Globe" size={18} className="mr-2" />
                Все животные
              </TabsTrigger>
              <TabsTrigger value="mammals" className="text-base">
                <Icon name="Rabbit" size={18} className="mr-2" />
                Млекопитающие
              </TabsTrigger>
              <TabsTrigger value="birds" className="text-base">
                <Icon name="Bird" size={18} className="mr-2" />
                Птицы
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {selectedAnimal ? (
          <div className="mb-8 animate-fade-in">
            <Button
              variant="outline"
              onClick={() => setSelectedAnimal(null)}
              className="mb-4"
            >
              <Icon name="ArrowLeft" size={18} className="mr-2" />
              Вернуться к списку
            </Button>
            
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-[400px] md:h-auto">
                  <img
                    src={selectedAnimal.image}
                    alt={selectedAnimal.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-8">
                  <CardHeader className="px-0 pt-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <CardTitle className="text-3xl mb-2">{selectedAnimal.name}</CardTitle>
                        <CardDescription className="text-lg italic">{selectedAnimal.scientificName}</CardDescription>
                      </div>
                      <Badge variant="secondary" className="text-sm">
                        {selectedAnimal.category === 'mammals' ? 'Млекопитающее' : 'Птица'}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="px-0 space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        <Icon name="MapPin" size={20} />
                        Среда обитания
                      </h3>
                      <p className="text-muted-foreground">{selectedAnimal.habitat}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        <Icon name="AlertTriangle" size={20} />
                        Статус охраны
                      </h3>
                      <Badge variant="destructive">{selectedAnimal.conservation}</Badge>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        <Icon name="Info" size={20} />
                        Описание
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{selectedAnimal.description}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        <Icon name="ListChecks" size={20} />
                        Характеристики
                      </h3>
                      <ul className="space-y-2">
                        {selectedAnimal.characteristics.map((char, index) => (
                          <li key={index} className="flex items-center gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {char}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        ) : (
          <>
            <div className="mb-4 text-muted-foreground">
              Найдено животных: <span className="font-semibold text-foreground">{filteredAnimals.length}</span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAnimals.map((animal) => (
                <Card
                  key={animal.id}
                  className="overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  onClick={() => setSelectedAnimal(animal)}
                >
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={animal.image}
                      alt={animal.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <Badge className="absolute top-3 right-3">
                      {animal.category === 'mammals' ? 'Млекопитающее' : 'Птица'}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl">{animal.name}</CardTitle>
                    <CardDescription className="italic">{animal.scientificName}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Icon name="MapPin" size={16} className="mt-0.5 flex-shrink-0" />
                        <span>{animal.habitat}</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <Icon name="AlertTriangle" size={16} className="mt-0.5 flex-shrink-0" />
                        <Badge variant="outline" className="text-xs">{animal.conservation}</Badge>
                      </div>
                    </div>
                    
                    <Button variant="default" className="w-full">
                      <Icon name="Eye" size={18} className="mr-2" />
                      Подробнее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </main>

      <footer className="bg-secondary text-secondary-foreground mt-16 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm opacity-90">
            © 2025 Энциклопедия диких животных. Образовательный проект о сохранении биоразнообразия.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
