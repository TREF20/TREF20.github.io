const countries = [
  {id:1, name:"Турция", flag:"🇹🇷", region:"Ближний Восток", cost:"900–1700", visa:"Безвиз 90 → ВНЖ легко", city:"Стамбул, Анталья", desc:"№1 для россиян 2026", pros:["Русские школы","Недвижимость от $130k","Много русскоязычных"], cons:["Инфляция","Землетрясения"],
    image: "1.png"  // Стамбул ночной вид
  },
  {id:2, name:"Грузия", flag:"🇬🇪", region:"Кавказ", cost:"700–1400", visa:"Безвиз 365 дней", city:"Тбилиси, Батуми", desc:"Самый близкий ментально", pros:["Как дома","1% налог ИП","Горы+море"], cons:["Политика","Зимой холодно"],
    image: "2.png"  // Тбилиси старый город
  },
  {id:3, name:"Армения", flag:"🇦🇲", region:"Кавказ", cost:"600–1300", visa:"Безвиз 180 дней", city:"Ереван", desc:"Самый дешёвый вариант", pros:["Дёшево","Быстрый ВНЖ","Безопасно"], cons:["Мало моря","Холодно зимой"],
    image: "3.png"  // Ереван Каскад
  },
  {id:4, name:"Казахстан", flag:"🇰🇿", region:"Центральная Азия", cost:"700–1500", visa:"Безвиз 90 дней", city:"Алматы", desc:"Новый магнит 2026", pros:["Русский везде","Горы","Стабильно"], cons:["Холодная зима"],
    image: "4.png"  // Алматы с горами
  },
  {id:5, name:"Сербия", flag:"🇷🇸", region:"Европа", cost:"900–1800", visa:"Фирма → ВНЖ", city:"Белград", desc:"Европа без шенгена", pros:["Европейский вайб","Дешёвая недвижка"], cons:["Нет моря"],
    image: "5.png"  // Белград река + крепость
  },
  {id:6, name:"ОАЭ", flag:"🇦🇪", region:"Ближний Восток", cost:"1800–4000", visa:"Golden Visa", city:"Дубай", desc:"Для тех, у кого доход", pros:["0% налог","Роскошь"], cons:["Очень дорого"],
    image: "6.png"  // Дубай Бурдж-Халифа ночь
  },
  {id:7, name:"Израиль", flag:"🇮🇱", region:"Ближний Восток", cost:"1800–3500", visa:"Репатриация", city:"Тель-Авив", desc:"Высокий уровень жизни", pros:["IT-зарплаты","Медицина"], cons:["Сложно без корней"],
    image: "7.png"  // Тель-Авив пляж + город
  },
  {id:8, name:"Таиланд", flag:"🇹🇭", region:"Азия", cost:"1000–2200", visa:"DTV 5 лет", city:"Пхукет, Чиангмай", desc:"Рай для номадов", pros:["Тропики","Йога"], cons:["Далеко"],
    image: "8.png"  // Пхукет / Таиланд пляж (это то, что у тебя работало)
  },
  {id:9, name:"Кипр", flag:"🇨🇾", region:"Европа", cost:"1400–2800", visa:"Pink Slip", city:"Лимассол", desc:"Мини-Европа у моря", pros:["300 дней солнца"], cons:["Дорого жильё"],
    image: "9.png"  // Лимассол марина
  },
  {id:10, name:"Португалия", flag:"🇵🇹", region:"Европа", cost:"1400–3000", visa:"D7 / Golden", city:"Лиссабон", desc:"Мечта ЕС", pros:["Океан","Шенген"], cons:["Сложная виза"],
    image: "10.png"  // Лиссабон трамвай + город
  },
  {id:11, name:"Испания", flag:"🇪🇸", region:"Европа", cost:"1200–2800", visa:"Non-Lucrative", city:"Валенсия", desc:"Классика", pros:["Море+солнце"], cons:["Сложно с визой"],
    image: "11.png"  // Валенсия город + море
  },
  {id:12, name:"Индонезия", flag:"🇮🇩", region:"Азия", cost:"1000–2500", visa:"Second Home", city:"Бали", desc:"Lifestyle остров", pros:["Рай","Русских много"], cons:["Далеко"],
    image: "12.png"  // Бали рисовые террасы Убуд
  }
];

function renderPopular() {
  const container = document.getElementById('popular-grid');
  if (!container) return;
  container.innerHTML = countries.slice(0,5).map(c => `
    <div onclick="showModal(${c.id})" class="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-105 transition cursor-pointer group">
      <img src="${c.image}" class="w-full h-48 object-cover">
      <div class="p-6">
        <div class="text-4xl mb-3">${c.flag}</div>
        <h3 class="text-2xl font-semibold">${c.name}</h3>
        <p class="text-emerald-400">от $${c.cost}</p>
      </div>
    </div>
  `).join('');
}

function renderAllCountries(filtered = countries) {
  const container = document.getElementById('countries-grid');
  if (!container) return;
  container.innerHTML = filtered.map(c => `
    <div onclick="showModal(${c.id})" class="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-105 transition cursor-pointer">
      <img src="${c.image}" class="w-full h-56 object-cover">
      <div class="p-6">
        <div class="flex justify-between">
          <div><span class="text-5xl">${c.flag}</span><h3 class="text-3xl font-bold mt-2">${c.name}</h3></div>
          <div class="text-right"><div class="text-emerald-400 font-medium">$${c.cost}</div></div>
        </div>
        <div class="mt-4 text-sm text-zinc-400">${c.visa}</div>
      </div>
    </div>
  `).join('');
}

function showModal(id) {
  const c = countries.find(x => x.id === id);
  if (!c) return;
  const modal = document.getElementById('modal');
  modal.innerHTML = `
    <div class="bg-zinc-900 rounded-3xl max-w-2xl w-full mx-4 overflow-hidden">
      <div class="relative">
        <img src="${c.image}" class="w-full h-80 object-cover">
        <button onclick="closeModal()" class="absolute top-6 right-6 bg-black/70 w-10 h-10 rounded-2xl flex items-center justify-center text-2xl">✕</button>
      </div>
      <div class="p-8">
        <div class="flex gap-4 items-center mb-6"><span class="text-6xl">${c.flag}</span><div><h2 class="text-4xl font-bold">${c.name}</h2><p class="text-emerald-400">от $${c.cost}</p></div></div>
        <p class="text-zinc-300 mb-8">${c.desc}</p>
        <div class="grid grid-cols-2 gap-8">
          <div><h4 class="font-semibold text-emerald-400 mb-3">✅ Плюсы</h4><ul class="space-y-2 text-sm">${c.pros.map(p=>`<li>• ${p}</li>`).join('')}</ul></div>
          <div><h4 class="font-semibold text-rose-400 mb-3">⚠️ Минусы</h4><ul class="space-y-2 text-sm">${c.cons.map(p=>`<li>• ${p}</li>`).join('')}</ul></div>
        </div>
      </div>
    </div>
  `;
  modal.classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}

// ТЕМА
function setTheme(theme) {
  if (theme === 'light') document.documentElement.classList.add('light');
  else document.documentElement.classList.remove('light');
  localStorage.setItem('theme', theme);
  document.querySelectorAll('[data-theme-toggle] i').forEach(i => {
    i.classList.toggle('fa-moon', theme === 'dark');
    i.classList.toggle('fa-sun', theme === 'light');
  });
}
function toggleTheme() {
  const cur = localStorage.getItem('theme') || 'dark';
  setTheme(cur === 'dark' ? 'light' : 'dark');
}

// СРАВНЕНИЕ
function populateCountrySelect() {
  const select = document.getElementById('country-select');
  if (!select) return;
  select.innerHTML = countries.map(c => `<option value="${c.id}">${c.flag} ${c.name}</option>`).join('');
}
function compareSelected() {
  const select = document.getElementById('country-select');
  const ids = Array.from(select.selectedOptions).map(o => +o.value);
  if (ids.length < 2 || ids.length > 4) return alert('Выберите от 2 до 4 стран');
  const selected = countries.filter(c => ids.includes(c.id));
  renderComparison(selected);
  document.getElementById('comparison-section').classList.remove('hidden');
}
function renderComparison(selected) {
  const thead = document.querySelector('#comparison-table thead tr');
  const tbody = document.getElementById('comparison-body');
  thead.innerHTML = '<th class="p-6 font-bold text-lg">Параметр</th>';
  selected.forEach(c => {
    thead.innerHTML += `<th class="p-6 text-center"><div class="text-5xl">${c.flag}</div><div class="font-bold">${c.name}</div></th>`;
  });
  tbody.innerHTML = '';
  const rows = [
    {label:'Стоимость жизни', val: c => c.cost},
    {label:'Виза', val: c => c.visa},
    {label:'Регион', val: c => c.region},
    {label:'Плюсы', val: c => c.pros ? c.pros.map(p=>`• ${p}`).join('<br>') : ''},
    {label:'Минусы', val: c => c.cons ? c.cons.map(p=>`• ${p}`).join('<br>') : ''},
  ];
  rows.forEach(r => {
    let html = `<tr class="border-t border-white/10"><td class="p-6 font-semibold">${r.label}</td>`;
    selected.forEach(c => html += `<td class="p-6 align-top">${r.val(c)}</td>`);
    html += '</tr>';
    tbody.innerHTML += html;
  });
}

// ИНИЦИАЛИЗАЦИЯ
document.getElementById('search')?.addEventListener('input', filterCountries);
document.getElementById('region-filter')?.addEventListener('change', filterCountries);

function filterCountries() {
  const searchInput = document.getElementById('search');
  const regionFilter = document.getElementById('region-filter');

  if (!searchInput || !regionFilter) return; // если элементов нет — выходим

  const term = searchInput.value.trim().toLowerCase();
  const selectedRegion = regionFilter.value.trim(); // может быть пустая строка

  console.log('Фильтр сработал:', { term, selectedRegion }); // ← для отладки в консоли

  const filtered = countries.filter(country => {
    const matchSearch = !term || 
      country.name.toLowerCase().includes(term) ||
      country.city.toLowerCase().includes(term) ||
      country.desc.toLowerCase().includes(term);

    const matchRegion = !selectedRegion || country.region === selectedRegion;

    return matchSearch && matchRegion;
  });

  console.log('Найдено стран после фильтра:', filtered.length); // ← тоже для отладки

  renderAllCountries(filtered);
}