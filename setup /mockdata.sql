insert into  admins (name, password, status) values ('Javohir','74b87337454200d4d33f80c4663dc5e5','super');
insert into  users (first_name, last_name, password, email, gender) values ('Javokhir','Tursunov','65ba841e01d6db7733e90a5b7f9e6f80','javokhir580@gmail.com','male');
insert into  users (first_name, last_name, password, email, gender) values ('Suxrob','Tursunov','65ba841e01d6db7733e90a5b7f9e6f80','javokhir580@gmail.com','male');

insert into users(first_name, last_name, email, pass_word, specialist ) values
('Javokhir','Tursunov','javokhir580@gmail.com','aaa2262716','bacholar degre'),
('Suxrob','Murodullayev','suxrob600@gmail.com','aaa9154006','master degre');

insert into languages(name)values 
('уз'),
('ru'),
('eng');

insert into categories(name,lang_id) values
('техника',1),
('спорт',1),
('иктисодйт',1),
('техника',2),
('спорт',2),
('политика',2),
('technique',3),
('sport',3),
('policy',3);

insert into news(title, body,img_link, lang_id,category_id) values
(
    'Apple iPhone 13 тақдимотини ўтказди',
    'Apple компанияси янги iPhone 13 смартфонининг 
    тақдимотини ўтказди. Янги моделнинг қатор 
    устунликлари санаб ўтилди.',
    'picsum.photos/200/300?grayscale',
    1,
    1
),
(
    'Apple провела презентацию iPhone 13',
    'Новый смартфон Apple iPhone 13
    провел презентацию. Серия новых моделей
    перечислены преимущества.',
    'picsum.photos/200/300?grayscale',
    2,
    4
),
(
    'Apple proved the presentation of iPhone 13',
    'Apples new iPhone 13 smartphone
    held a presentation. A series of new models
    advantages are listed.',
    'picsum.photos/200/300?grayscale',
    3,
    7
),
(
    'Қирол кетди, қиролликда пароканда бошланди. «Барселона» Мессисиз эплолмаяптими?',
    'Лионель Мессининг кетиши «Барселона» учун оғриқли бўлиши аввалдан маълум эди.
     Ахир ҳар йили 40-50талаб гол уриши тайин бўлган футболчи бирданига кетиб қолиши 
     ҳар қандай жамоани қийнаб қўйиши кутилганди.',
     'picsum.photos/200/300?grayscale',
    1,
    2
),
(
    'Король ушел, и королевство начало распадаться. «Барселона» не может обойтись без Месси?',
    'Уже было известно, что уход Лионеля Месси будет болезненным для «Барселоны».
     Ведь игрок, которому суждено забивать 40-50 голов в год, вдруг уйдет.
     Ожидалось, что помучит любую команду.',
     'picsum.photos/200/300?grayscale',
    2,
    5
),
(
    'Korol ushel, i korolevstvo nachalo raspadatsya. "Barcelona" can not do without Messi?',
    'It was already known that the departure of Lionel Messi would be painful for Barcelona.
     After all, a player who is destined to score 40-50 goals a year will suddenly leave
     was expected to torment any team.',
     'picsum.photos/200/300?grayscale',
    3,
    8
),
(
    'Жаҳон банки Doing Business рейтингидаги «Ўзбекистон протоколи»га изоҳ берди',
    'WilmerHale юридик фирмаси томонидан тайёрланган ҳужжатда айрим мамлакатлар 
    рейтингини пасайтириш учун банк раҳбарияти',
    'picsum.photos/200/300?grayscale',
    1,
    3
),
(
    'Всемирный банк прокомментировал «Протокол Узбекистана» в рейтинге Doing Business',
    'Некоторые страны в документе, подготовленном юридической фирмой WilmerHale
    руководство банка понижает рейтинг',
    'picsum.photos/200/300?grayscale',
    2,
    6
),
(
    'The World Bank commented on the "Protocol of Uzbekistan" in the Doing Business rating',
    'Some countries in the document prepared by the law firm WilmerHale
    the banks management to downgrade',
    'picsum.photos/200/300?grayscale',
    3,
    9
);

insert into coments (news_id, user_id, body) values 
(10,1,'sjihidjvdifu');