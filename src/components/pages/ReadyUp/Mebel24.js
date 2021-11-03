import { Helmet } from "react-helmet";
import { Wrapper, H1, P } from "../pagesStyles";
import Wellcome from '../Home/WellcomeText/WellcomeDiv';
const Mebel24 = () => {
    return (
        <>
            <Helmet>
                <title>mebel</title>
                <meta name="description" content="Nested component" />
            </Helmet>
            <Wellcome />
            <Wrapper>
                <H1>ПРО САЙТ КОМПАНІЇ "МЕБЛІ-24"</H1>
                <P>Не так давно зі мною зв'язався власник сайту "Меблі-24". Він написав мені, що в нього є суттєві проблеми з організацією сайту та деякі проблеми в адмініструванні і SEO, а також вказавши, що сайт розроблений в "Opencart". Не довго роздумуючи я дав згоду на допомогу, проте попередив, що з "Opencart" я ніколи не працював, тому можливо робота буде просуватись не швидко. Також SEO оптимізацією я ніколи не займався, так як вона мені не дуже імпонує;)</P>

                <P>Тож, визначившись з об'ємом роботи я заглибився у вивчення особливостей CMS "Opencart". Тут я зрозумів, що система в принципі зрозуміла, проте блоки керування розкидані по всій адміністративній панелі і щоб знайти параметри редагування якогось маленького тексту, часом я витрачав по декілька годин. Також в "Opencart" є такі параметри, редагування котрих не передбачене стандартною панеллю керування.</P>

                <P>На скільки я зрозумів, за цей, поки що не довгий період роботи з вказаним сайтом, код контенту сторінки "Opencart" формує з компонентів, а інформацію в компоненти бере з папок "Cache" на різних рівнях. Дуже погано зрозуміла будова сторінки для подальшого її розбору та редагування. Проте, якщо порівнювати з системою плагінів "Wordpress", тут також присутні модулі, є як безкоштовні так і платні.</P>

                <P>За період роботи з сайтом "Меблі-24", мною проведено аналіз роботи та працездатності сайту, видалено деякий код з шаблону, який заважав коректно відображатись контенту та посилковій масі підвалу. Додано модуль організації товару за кількістю на складі менше 1-го. Виправлено порядок відображення контенту на різних мовах, таких як тексту та картинок. Також зробив можливим додавати "description" на системні сторінки, в яких цього параметру з коробки немає та інше.</P>

                <P>Також, хочу зазначити, що мої знання в РНР не глибокі, я його не вчив від А до Я. Знаю тільки деякі параметри і функції, проте це не заважає мені розбиратись і розуміти код РНР залежних сайтів;) </P>
            </Wrapper>
        </>
    )
};

export default Mebel24;