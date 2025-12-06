

import { Broker, BrokerType } from './types';

export const BROKERS: Broker[] = [
  {
    id: 'monaxa',
    name: 'Monaxa',
    tagline: 'اقتنص الأرباح .. بسبريد منخفض وتنفيذ فوري',
    description: `الوسيط المالي الرائد الذي يعيد تعريف تجربة التداول في الأسواق العالمية. MONAXA تقدم لعملائها تجربة تداول فريدة تتسم بالشفافية، الأمان، والتنوع الذي يلبي جميع احتياجات المتداولين من جميع المستويات.

خدمات متميزة تشمل:
- حسابات تداول متنوعة تناسب الجميع بدءًا من Standard، Pro، Zero، وحتى حسابات Cent.
- سبريد منخفض يسمح بتحقيق أرباح أعلى.
- عروض بونص على الإيداع قابلة للتداول بنسبة خسارة تصل إلى 100%.
- نظام كاش باك (استرداد نقدي) يكافئ نشاطكم في السوق.
- منصة تداول متطورة وسهلة الاستخدام تعتمد أحدث التقنيات.
- دعم فني متاح على مدار الساعة لتلبية كافة احتياجاتكم.
- سحب وإيداع سريع ومرن.
- برامج نسخ تداول متقدمة تتيح الاستفادة من خبرات المتداولين المحترفين.
- رافعة مالية تصل إلى 1:2000 لتوفير فرص تداول أكبر ومرونة في الإدارة المالية.`,
    wikiFxInfo: {
      platforms: ['MetaTrader 4', 'cTrader'],
      accounts: ['Standard', 'Pro', 'Zero', 'Cent'],
      assets: ['فوركس', 'مؤشرات', 'سلع', 'عملات رقمية', 'أسهم'],
      leverage: 'تصل إلى 1:4000'
    },
    logoColor: 'bg-indigo-600',
    logoUrl: 'https://account.monaxa.com/uploads/public/assets/2024/12/23/91db0eda25e513ad81374eb8aaec902c.png',
    types: [BrokerType.FOREX, BrokerType.STOCKS, BrokerType.CRYPTO],
    minDeposit: 20,
    rating: 4.6,
    features: ['سبريد منخفض يسمح بتحقيق ارباح اعلى', 'سرعة عالية في تنفيذ الصفقات'],
    pros: ['يسمح بتحقيق أرباح أعلى', 'تنفيذ صفقات فوري', 'إيداع أدنى 20$'],
    cons: ['فروقات أسعار متغيرة وقت الأخبار', 'تنظيم خارجي'],
    metrics: { fees: 90, usability: 82, assets: 80, research: 70, support: 88 },
    regulation: 'SVGFSA',
    paymentMethods: ['TRC20', 'بنوك محلية', 'عملات رقمية'],
    link: 'https://account.monaxa.com/ar/links/go/19794'
  },
  {
    id: 'headway',
    name: 'HeadWay',
    tagline: 'الخيار الأسهل .. ابدأ استثمارك بـ 1$ فقط',
    description: `تعتبر شركة Headway من الشركات الرائدة والصاعدة في شركات الوساطة المالية في أسواق التداول عبر الإنترنت، حيث تقدم طيفاً واسعاً من المنتجات في صناعة الـ Fintech.

تبدأ من حسابات التداول المتنوعة بحسب قدرات واحتياجات المستخدمين، كحساب السنت للمتداولين المبتدئين، وحساب الستاندرد للمتداولين المتمرسين، وأيضاً حساب البرو للمتداولين المحترفين، مما يجعل الشركة تغطي احتياجات جميع العملاء.

كما تقدم عروضاً مميزة لتجربة المنصة كعرض 111 دولار، وعروضاً تشجيعية رائعة (تداول واكسب هدايا)، وعروضاً إنسانية كعرض "طريق الحلم".

تقدم الشركة للشركاء برنامج الشراكة حيث تتقاسم الشركة الاسبريد مع وكلائها حول العالم، وعرض خاص بالوكلاء Cash Booster. كما تقدم خدمة النسخ Copytrade. وتمتاز بمنتج فريد ومبتكر هو الاستثمار العقاري من خلال خدمة NOVA المرتبطة بتقنية سلسلة الكتل (Blockchain).

يسعدنا أن نكون مودع محلي للشركة لتسهيل معاملات العملاء في اليمن والوطن العربي ولنكون شركاء النجاح مع الشركة.`,
    wikiFxInfo: {
      platforms: ['MetaTrader 4', 'MetaTrader 5'],
      accounts: ['Cent', 'Standard', 'Pro'],
      assets: ['فوركس', 'عملات رقمية', 'معادن', 'طاقة', 'أسهم', 'مؤشرات'],
      leverage: 'غير محدودة'
    },
    logoColor: 'bg-blue-600',
    logoUrl: 'https://hw.online/wp-content/themes/headway/img/logo.svg',
    types: [BrokerType.FOREX, BrokerType.CRYPTO, BrokerType.CFD],
    minDeposit: 1,
    rating: 4.8,
    features: ['تستطيع البدأ بدولار', 'سهلة جداً في الاستخدام'],
    pros: ['ابدأ بـ 1$ فقط', 'سحب فوري', 'سهلة جداً في الاستخدام'],
    cons: ['جديد نسبياً في السوق', 'مكتبة تعليمية محدودة'],
    metrics: { fees: 92, usability: 95, assets: 85, research: 75, support: 85 },
    regulation: 'FSCA',
    paymentMethods: ['CoinCash', 'بطاقات بنكية', 'عملات رقمية'],
    link: 'https://hw.online/user/signup?hwp=50ca6f'
  },
  {
    id: 'litefinance',
    name: 'Lite Finance',
    tagline: 'تاريخ من الثقة .. وريادة في التداول الاجتماعي',
    description: `LiteFinance هي شركة موثوقة تتمتع بسمعة لا تشوبها شائبة وقد عملت في مجال تداول الفوركس منذ 2005. تقدم خدمات حديثة ومتقدمة تقنيًا، كذلك توفر ظروف تداول مناسبة وفروق أسعار منخفضة وسرعة عالية في تنفيذ أوامر التداول.

تقدم مزايا لعملائها من أجل تداول مريح ومربح. LiteFinance توفر بداية سهلة وسلسة في التسجيل والإيداع الأولي المنخفض الذي يتيح لأي شخص أن يصبح مشاركاً كاملاً في السوق.

أصبح المتداولون العرب يفضلون شركة الوساطة LiteFinance لتقديمها حسابات إسلامية تتوافق مع الشريعة الإسلامية.`,
    wikiFxInfo: {
      platforms: ['MetaTrader 4', 'MetaTrader 5'],
      accounts: ['ECN', 'Classic', 'Cent'],
      assets: ['أزواج عملات', 'نفط', 'معادن ثمينة', 'مؤشرات أسهم', 'عملات مشفرة'],
      leverage: '1:1000'
    },
    logoColor: 'bg-emerald-600',
    logoUrl: 'https://www.litefinance.org/assets/2d47d2c9/images/litefinance.svg',
    types: [BrokerType.FOREX, BrokerType.CFD, BrokerType.MULTI_ASSET],
    minDeposit: 20,
    rating: 4.7,
    features: ['تداول اجتماعي', 'BEP20 و CoinCash', 'تقنية ECN'],
    pros: ['علامة تجارية موثوقة وقديمة', 'رواد في نسخ التداول', 'مدفوعات كريبتو متنوعة'],
    cons: ['واجهة المنصة قد تكون معقدة', 'رسوم عدم النشاط'],
    metrics: { fees: 88, usability: 85, assets: 90, research: 90, support: 92 },
    regulation: 'CySEC, SVGFSA',
    paymentMethods: ['BEP20', 'CoinCash', 'بطاقات بنكية'],
    link: 'https://www.litefinance.org/ar/?uid=749498747'
  },
  {
    id: 'topfx',
    name: 'TOPFX',
    tagline: 'تداول كالمحترفين .. سيولة عميقة وبلا عمولات خفية',
    description: `توفر حلول السيولة العميقة للوسطاء وشركات الاستثمار الأخرى منذ عام 2010. جنبًا إلى جنب مع خدمات الوساطة الأساسية، نتيح لجميع أنواع العملاء اليوم تداول أكثر من 600 أصل بنفس الشروط المتاحة للمؤسسات الكبرى مع خدمة عملاء من الدرجة الممتازة.

TOPFX يتم إدارة الأوامر عبر خاصية التوجيه الذكي، وهي عملية آلية تسمح لها بالوصول إلى العديد من مواقع التداول في وقت واحد بغرض البحث عن أفضل الأسعار المتاحة في وقت تنفيذ الأمر، وبمجرد الحصول على أفضل سعر متاح يقوم النظام تلقائياً بتنفيذ الأمر وفقاً له.

توفر لك TopFX فروق أسعار رائدة على مستوى الصناعة وخدمات تنفيذ موثوقة تغطي أسواق الفوركس والمؤشرات والمعادن وسلع الطاقة وعقود الفروقات الأخرى، وذلك بفضل الحصول على خلاصات السيولة المجمعة عبر عدة مؤسسات من المستوى الأول.`,
    wikiFxInfo: {
      platforms: ['cTrader', 'MetaTrader 4'],
      accounts: ['Raw', 'Zero'],
      assets: ['+600 أصل', 'فوركس', 'أسهم', 'مؤشرات', 'معادن', 'طاقة'],
      leverage: '1:500'
    },
    logoColor: 'bg-rose-600',
    logoUrl: 'https://www.ysfep.com/static/ystorepay/images/topfx.webp',
    types: [BrokerType.FOREX, BrokerType.CFD, BrokerType.STOCKS],
    minDeposit: 50,
    rating: 4.9,
    features: ['سبريد خام', 'cTrader & MT4', 'دعم TRC20'],
    pros: ['تنفيذ مؤسسي', 'بدون تدخل غرفة مقاصة', 'فروقات أسعار تنافسية'],
    cons: [],
    metrics: { fees: 95, usability: 80, assets: 85, research: 85, support: 90 },
    regulation: 'CySEC, FSA',
    paymentMethods: ['TRC20', 'تحويل بنكي', 'Visa/MC'],
    link: 'https://signup.topfx.com.sc/Registration/Main/Account?dest=live&camp=9761'
  },
  {
    id: 'valetax',
    name: 'Valetax',
    tagline: 'تداول باطمئنان .. مع ميزات حماية متقدمة',
    description: `Valetax – حيث يتلاقى التداول الاستثنائي مع خدمة لا مثيل لها. نحن ملتزمون بتزويد المتداولين بالأدوات اللازمة لاتخاذ قرارات تداول مربحة وفعالة.

تداول بثقة واعلم أن أصدقاءك يحظون بالسرية والأمان والحماية لدينا. تمتثل Valetax لجهات التنظيم رفيعة المستوى، وتوفر ميزة الحماية من الرصيد السلبي، وطرق دفع آمنة لتعزيز سلامة أموالك. هذا هو السبب في أننا الخيار المفضل للتداول في الأسواق باطمئنان.

شركة VALETAX INTERNATIONAL LIMITED هي شركة قائمة في موريشيوس مسجلة برقم 180644 وتعمل سمسار استثمار (سمسار لجميع الخدمات باستثناء خدمة التعهد بالاكتتاب برخصة رقم GB21026312 صادرة عن لجنة الخدمات المالية في موريشيوس).`,
    wikiFxInfo: {
      platforms: ['MetaTrader 4', 'MetaTrader 5'],
      accounts: ['Cent', 'Standard'],
      assets: ['فوركس', 'معادن', 'طاقة', 'عملات رقمية'],
      leverage: '1:2000'
    },
    logoColor: 'bg-violet-600',
    logoUrl: 'https://www.ysfep.com/static/ystorepay/images/valetax.webp',
    types: [BrokerType.FOREX, BrokerType.CRYPTO],
    minDeposit: 20,
    rating: 4.5,
    features: ['حسابات سنت', 'دفع BEP20', 'رافعة عالية'],
    pros: ['دخول سهل بـ 20$ فقط', 'صديقة للعملات الرقمية', 'فتح حساب بسيط'],
    cons: ['تنوع أصول محدود', 'أدوات بحث أساسية'],
    metrics: { fees: 82, usability: 88, assets: 75, research: 65, support: 80 },
    regulation: 'International',
    paymentMethods: ['BEP20', 'CoinCash', 'عملات رقمية'],
    link: 'https://ma.valetax.com/p/7986818'
  }
];