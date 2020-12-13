import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-articles',
  templateUrl: './app-articles.component.html',
  styleUrls: ['./app-articles.component.css']
})
export class AppArticlesComponent implements OnInit {

  constructor() { }

  artimg: any = '../../../assets/images/articles/img.jpg';

  articles: any[] = [
    { title: 'charminar', content: 'The charminar was constructed in 1591,located in Hyderabad.The old city of Hyderabad was designed with charminar as its centerpiece.The city was spread around the charminar in four quadrants and chambers,segregated according to the established settlements.', src : '../../../assets/images/articles/Charminar.jpeg'},
    { title: 'Tirumala', content: 'Venkateswara Temple is a Hindhu temple situated in a hill town of tirumala at Tirupathi in chittor district of AP.Tirumala hills are a part of seshachalam Hills range.It is the richest temple in the world in terms of donations received and wealth.' ,src : '../../../assets/images/articles/Tirumala.jpeg'},
    { title: 'Golden Temple', content: 'The Golden temple is located in the holy city of the Sikhs, Amritsar. The Golden temple is famous for its full golden dome, it is one of the most sacred pilgrim spots for Sikhs.' ,src : '../../../assets/images/articles/Goldentemple.jpeg'},
    { title: 'Thar Desert', content: 'The Thar Desert, also known as the Great Indian Desert, is a large arid region in the northwestern part of the Indian subcontinent that covers an area of 200,000 km2 (77,000 sq mi) and forms a natural boundary between India and Pakistan. It is the worlds 17th largest desert, and the worlds 9th largest hot subtropical desert.', src : '../../../assets/images/articles/Thar.jpeg' },
    { title: 'Varanasi', content: 'Varanasi grew as an important industrial centre famous for its muslin and silk fabrics, perfumes, ivory works, and sculpture.Varanasi has been a cultural centre of northern India for several thousand years, and is closely associated with the Ganges.Varanasi grew as an important industrial centre famous for its muslin and silk fabrics,perfumes, ivory works, and sculpture.',src : '../../../assets/images/articles/Varanasi.jpeg'},
    { title: 'Bangalore', content: 'Banglore played an important role during the Indian independence Banglore is a major economic and cultural hub and the fastesrt growing major metropolis .It become the sixth largest city.',src : '../../../assets/images/articles/Bangalore.jpeg' },
    { title: 'tajmahal', content: 'The Taj Mahal is located on the right bank of the Yamuna River in a vast Mughal garden that encompasses nearly 17 hectares, in the Agra District in Uttar Pradesh.',src : '../../../assets/images/articles/tajmahal.jpeg' },
    { title: 'Shimla', content: 'Shimla or simmla is the capital of the state of Himachal pradesh in India.It is very popular holiday-retreat during the summer months and is well known for its Voctorian architecture.',src : '../../../assets/images/articles/Shimla.jpeg' },
    { title: 'Goa', content: 'The state of Goa,in India, is famous for its beaches and places of worship.Tourism its primary industry,and is generally focused on the coastal areas of Goa.',src : '../../../assets/images/articles/Goa.jpeg' },
    { title: 'Kanyakumari', content: 'Kanyakumari is the southernmost point of peninsular India and the meeting point of three oceans-the Bay of Bengal, the Arabian Sea and the Indian Ocean. Besides its importance as a Hindu pilgrim center, it is famous for its beautiful views of sunrise and sunset over the waters.',src : ' ../../../assets/images/articles/kanyakumari.jpeg' },
    { title: 'Nainital', content: 'Nainital is a Himalayan resort town in the Kumaon region of India’s Uttarakhand state, at an elevation of roughly 2,000m. Formerly a British hill station, it’s set around Nainital Lake, a popular boating site with Naina Devi Hindu Temple on its north shore.',src : '../../../assets/images/articles/Nanitol.jpeg' },
    { title: 'Ooty', content: 'Ooty is a town and a municipality in the Nilgiris district of the Indian state of Tamil Nadu. It is located 86 km north of Coimbatore and 128 km south of Mysore and is the headquarters of the Nilgiris district. It is a popular hill station located in the Nilgiri Hills.',src : '../../../assets/images/articles/ooty.jpeg' }];

  ngOnInit() {
  }

}
