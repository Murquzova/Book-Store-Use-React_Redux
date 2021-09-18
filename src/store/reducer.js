const initialState = {
  books: [
    {
      id: 11,
      name: 'Aramızda beşcə addım',
      author: 'Reyçel Lippinkott',
      janr: 'Roman',
      pageCount: 256,
      img: 'https://static-sl.insales.ru/images/products/1/4078/469463022/large_ARAMIZDA_BESH_ADDIM.jpg',
      price: 9.99,
      details:
        'Sağalmaz xəstəliklə yaşamağa məcbur olan gənc­lərin həyat eşqindən bəhs edən əsər insanlararası münasibətlərin hər şeydən vacib olduğunu önə çəkir. Müəllif itirmək qorxusunun insanı daha anlayışlı bir varlığa çevirdiyini ustalıqla göstərir.',
    },
    {
      id: 22,
      name: 'Qara kitab',
      author: ' Orhan Pamuk',
      janr: 'Roman',
      pageCount: 496,
      img: 'https://static-sl.insales.ru/images/products/1/417/469655969/large_Orxan_Pamuk_Qara_kitab_Esas.png',
      price: 8.47,
      details: `“Qara kitab” romanı ədəbiyyat üzrə Nobel mükafatı laureatı Orhan Pamukun şah əsəridir...
      Qalib uşaqlıq sevgisi, dostu, əmisi qızı, sevgilisi və itkin arvadı Röyanı qarlı bir qış günü İstanbulda axtarmağa başlayır. Uşaqlıq illərindən bəri yazılarını heyranlıqla oxuduğu yaxın qohumu, qəzetdə işləyən Cəlalın köşə yazıları bu axtarışda ona işarələr verəcək, yoldaşlıq edəcəkdir.
      Oxucu bir yandan hər bacası, hər küçəsi, hər adamı başqa sirli aləmin əlamətlərinə çevrilən İstanbulda Qalibin axtarışlarını, rast gəldiyi adamları təqib edərkən, bir yandan da bu araşdırmaları ayrı-ayrı əlamətlərlə, qəribə əhvalatlarla tamamlayan Cəlalın köşə yazıları ilə qarşılaşır...`,
    },
    {
      id: 132,
      name: 'Qumluqdakı qadın',
      author: 'Kobe Abe',
      janr: 'Roman',
      pageCount: 208,
      img: 'https://static-sl.insales.ru/images/products/1/1286/455263494/large_Kobo_Abe_Qumluqdaki_qadin_qapaq.png',
      price: 6.99,
      details: `Yapon ədəbiyyatının ən böyük söz ustalarından biri olan Kobo Abenin “Qumluqdakı qadın” romanının bütün dövrlərin 100 ən yaxşı əsəri siyahısına daxil edilməsi təsadüfi deyil. Mental və cismani qütblərin münaqişəsi üzərində qurulmuş, həşərat kolleksiyası toplayan kişinin və qumluqdakı kiçik kənddə tənha yaşayan qadının kədərli tarixçəsi olan əsər oxucu qəlbinin dərinliklərinə sirayət edir, son cümlələrinədək intizarda saxlayır.`,
    },
    {
      id: 23,
      name: 'İnsanın öz dünyası',
      author: 'Şahvələd Köçərli',
      janr: ' Memuar',
      pageCount: 192,
      img: 'https://static-sl.insales.ru/images/products/1/8155/421552091/large_Shahveled_Kocherli_qapaq_Esas.png',
      price: 4.25,
      details: `Kitabçada müəllifin – Respublikanın tanınmış neftçi-geoloqunun uzun illər ərzində qələmə aldığı deyim və atmacalar, esse və düşüncələr, şahidi olduğu real tarixi hekayətlər yer almışdır. Məsləkinə uyğun olaraq müəllif orijinal təbiət hadisələrini də unutmamış, onlardan bəzilərini ayrıca bölüm şəklində təqdim etmişdir.
      Düşünürük ki, kitabça geniş oxucu kütləsinin marağına səbəb olacaq.`,
    },
    {
      id: 4,
      name: 'Auşvitz döyməçisi',
      author: 'Heather Morris',
      janr: 'Roman',
      pageCount: 302,
      img: 'https://static-sl.insales.ru/images/products/1/4651/425898539/large_Heather_Morris_Aushvitz_qapaq.png',
      price: 4.25,
      details: `Bəlkə də, “Auşvitz döyməçisi” əsərini hamı oxumalıdır – uşaqdan-böyüyə kimi. Nədən? Çünki hər bir insanın həyatında çətin, dözülməz saydığı dönəmlər olur. Bu, qaçılmazdır. Məhz belə dönəmdə bu əsərin qəhrəmanları, xüsusi vurğulayaq, gerçək qəhrəmanları hər kəsə gözəl bir nümunə ola bilər.
      Sonda müəllif qeyd edir ki, əsərin əsas personajı olan Lale ona xatirələrini bəzək-düzəksiz, olduğu kimi qələmə almağı tapşırıb. Bu mənada, ola bilər, roman bədiilik baxımından oxucunu qane etməsin. Ancaq əsas olan odur ki, oxuyacağınız tərtəmiz həyat həqiqətidir. Həyatın isə hər üzü var.`,
    },
  ],
  modal: false,
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case 'DELETE':
      return {
        ...state,
        books: state.books.filter((item) => item.id !== action.id),
      };
    case 'OPEN':
      return { ...state, modal: action.value };
    case 'CLOSE':
      return { ...state, modal: action.value };
    case 'ADDNEWBOOK':
      return {
        ...state,
        books: [...state.books, action.book],
        modal: action.value,
      };
    default:
      return state;
  }
}
