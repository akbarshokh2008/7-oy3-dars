import React, { useState } from 'react';
import Header from '../Components/Header';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Header />
      <div className='contaiener mx-auto px-28 mt-24'>
        <div className='counter flex flex-col items-center justify-center'>
          <h1 className='text-6xl mb-4'>{counter}</h1>
          <div className='flex gap-4 mb-24'>
            {' '}
            <button
              className='bg-blue-500 text-white py-1 px-10 hover:bg-blue-400 rounded-xl'
              onClick={() => {
                setCounter(counter - 1);
              }}
            >
              <p className='text-4xl'>-</p>
            </button>
            <button
              className='bg-blue-500 text-white py-1 px-8 hover:bg-blue-400 rounded-xl'
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              <p className='text-4xl'>+</p>
            </button>
          </div>
        </div>
        <div className='text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          temporibus, saepe, alias consequuntur reprehenderit pariatur quod
          deleniti optio nostrum quae quas sint? Sequi, aspernatur odio a
          tenetur, magnam voluptatum deserunt doloribus soluta veritatis dolorum
          adipisci. Incidunt perferendis aperiam aut numquam eveniet inventore
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
          exercitationem laboriosam iure nulla! Pariatur numquam nisi eos?
          Laborum repudiandae cupiditate soluta officia, facere doloremque
          dignissimos sit, saepe, quo alias magni in? Delectus cupiditate
          reprehenderit dolorem minus deserunt, quisquam obcaecati voluptatem
          excepturi ratione quam illo at neque illum odit nobis repudiandae ut
          mollitia beatae nesciunt nemo! Obcaecati enim, maxime mollitia nobis
          soluta, exercitationem ipsam consequuntur minima rerum, ea similique
          cum natus quam architecto! Quae expedita vero eveniet id ab
          reprehenderit dolor sequi dicta adipisci velit, omnis est doloremque
          odit itaque aliquid neque qui perspiciatis ullam similique architecto
          ad aliquam repellendus. Voluptate ducimus assumenda quod. Sed cumque
          modi voluptatum. Ex dolorem voluptates facilis aliquid nemo
          perferendis dolores ratione aperiam dolore inventore, earum adipisci
          eos labore ut at delectus rerum quo consectetur quos fuga laboriosam
          sapiente dolorum. Error, cum? Cumque tempore quo sapiente sunt, ullam
          et architecto at veritatis eligendi inventore excepturi quod eaque
          blanditiis recusandae accusamus voluptate omnis debitis in soluta
          culpa. A facere expedita natus, dolor autem perspiciatis consectetur
          explicabo accusantium recusandae vero laborum voluptate corrupti
          temporibus doloribus soluta pariatur rem sapiente neque suscipit.
          Deleniti delectus doloremque eligendi inventore sequi eveniet et,
          beatae praesentium, numquam reiciendis saepe officia atque dolorum at
          quos, distinctio est debitis! Ab fugiat voluptatibus nihil iste autem
          exercitationem quaerat praesentium quod. Dolorum aliquid odit id sequi
          cumque sit totam? Iste iure reiciendis molestias? Aliquid neque iste
          quos quia dolor saepe eum doloribus reiciendis esse asperiores dicta
          suscipit culpa quidem obcaecati excepturi, fugit corporis unde dolorum
          nam ad rerum pariatur veniam eligendi. Odio, cupiditate adipisci rem
          quidem dolore nemo consequatur sunt recusandae ipsum excepturi minima.
          Odio cumque cum optio aperiam error fugit veniam pariatur ratione quod
          in deleniti sit, id excepturi rem atque illo voluptates harum dolor
          sint quo. Explicabo repellat repudiandae, quibusdam laudantium maiores
          asperiores perspiciatis, cum exercitationem aperiam a pariatur maxime
          nam voluptate ducimus eveniet neque ut cupiditate. Distinctio
          voluptate nobis magni, placeat numquam aut, perspiciatis aspernatur
          maiores perferendis necessitatibus possimus impedit est sequi voluptas
          repudiandae et sunt. Labore exercitationem quia maiores magnam itaque
          nisi, voluptates perferendis provident deserunt iste non veritatis ea
          dolorum nemo quae nobis sint mollitia reiciendis, enim libero est
          dolore eos? Labore eum vel sequi, quos ipsa qui repellendus ex dolorem
          reprehenderit, placeat sunt hic. Voluptate inventore eaque praesentium
          magnam, voluptates nihil dolorem. Repudiandae est vitae fugit rem
          adipisci labore quae debitis veritatis nesciunt facilis dicta eius
          aliquid porro quasi delectus magnam quia aut nostrum, consequuntur
          temporibus? Veritatis asperiores sapiente saepe itaque odio!
          Perspiciatis quasi, magnam nulla similique nihil tempora, cumque,
          eveniet in totam fuga amet neque veritatis culpa sint odio vitae nam
          officia natus nostrum dignissimos asperiores porro! Hic ullam tempore
          repudiandae ipsum, ad veniam molestiae qui corrupti, cupiditate fugit
          inventore quae neque unde quos corporis necessitatibus similique.
          Voluptatum error saepe unde vel soluta! Doloremque porro voluptatibus
          assumenda aliquam voluptate. Repudiandae, officia provident dolorem
          maxime, accusantium sit expedita laboriosam consectetur porro
          exercitationem reiciendis officiis laborum numquam! Nesciunt minima ea
          quod quibusdam a sed, ipsum dolores sapiente, temporibus accusamus,
          debitis saepe blanditiis perferendis? Vitae suscipit veritatis est
          blanditiis earum quidem cumque enim maxime, repellendus, odio id
          nostrum in doloremque molestiae nihil esse, architecto voluptas? Illo,
          saepe minima ex necessitatibus velit optio ullam accusamus nemo id
          quas magni quasi et voluptas vel beatae ratione maiores porro neque
          amet. Eveniet quaerat odit, repudiandae harum ut cumque voluptatem
          nisi, quod autem ipsa quis necessitatibus. Obcaecati blanditiis
          provident possimus quos repellat at quia ex nihil mollitia doloremque
          assumenda eaque itaque rem perspiciatis quo architecto est minima,
          quam numquam commodi maiores aspernatur quis deserunt. Praesentium cum
          impedit voluptates asperiores molestiae quod tenetur aliquid eos
          dicta! Inventore et veritatis est consequuntur earum? Eligendi natus
          impedit repellendus? Nobis repellat voluptatum quis ipsam laudantium,
          cumque quam maxime suscipit dolore voluptas non enim sed perspiciatis
          adipisci laborum. Fuga quod ratione maiores vero inventore iure
          quidem, tenetur voluptatem ipsam vel reiciendis culpa nisi aperiam
          laudantium nam delectus et dolor consequuntur laboriosam architecto
          veritatis impedit eaque. Maxime labore quod ipsa repellendus eligendi
          accusantium voluptatibus, beatae saepe recusandae sint possimus,
          cupiditate a et. Laboriosam reprehenderit quisquam amet itaque
          voluptatem corrupti dicta eligendi modi nesciunt quibusdam. Quae,
          consequatur ipsa? Atque odio sequi ducimus distinctio in autem,
          inventore sunt cupiditate nihil magni. Libero, tempore voluptatibus.
          Animi, illum nisi molestias ipsam repellendus ratione maxime amet
          quisquam adipisci tempore excepturi soluta autem obcaecati fugiat
          minus velit quas veniam enim incidunt ducimus ipsum expedita non neque
          sit? Facere qui odit iste, non enim temporibus delectus nobis voluptas
          ducimus ipsam! Minima optio id vero recusandae culpa neque beatae
          nesciunt dolores aliquam vitae, iure est adipisci aspernatur modi
          provident, eveniet iusto ipsum unde repudiandae reprehenderit dicta
          consectetur odio alias. Reiciendis sapiente assumenda non pariatur
          quas laboriosam nulla quam sint natus sit? Architecto molestiae unde
          nulla nostrum nemo nesciunt debitis. Molestias unde quos corporis ipsa
          id laboriosam veritatis, magnam quas, totam ratione quam quidem cum
          culpa quisquam alias suscipit illum, ipsum distinctio pariatur
          recusandae rem? Delectus voluptatem eaque quae odio autem reiciendis
          ipsum nisi, minus commodi eius itaque hic quam impedit qui cum
          blanditiis, soluta accusantium ex repellendus iste. A vitae quis
          maxime quod temporibus, natus necessitatibus pariatur sequi! Ad
          voluptatem quibusdam aut, ipsum ab eaque, voluptatum recusandae
          architecto maiores ratione, obcaecati impedit quidem libero debitis
          quis amet magni aliquam. In reiciendis illo consectetur adipisci
          explicabo a asperiores incidunt, quod totam! Eos et culpa sapiente aut
          ex ad odio veritatis earum quidem in corporis id dolorem vero sed
          nemo, molestias doloribus, eveniet officiis repellat delectus illo
          nisi dicta? Officia unde odit ab laborum rem in veritatis consectetur
          culpa dignissimos! Eligendi, sint. Corporis ad fugit dolores? Eaque
          cupiditate, nemo sapiente aspernatur inventore fugiat incidunt
          possimus itaque rerum ad, ducimus autem natus doloribus non veniam
          reiciendis sit voluptas tenetur qui voluptatibus minima. Accusamus
          reprehenderit saepe maxime ipsam ipsum, tempora aperiam in provident
          commodi eaque animi id modi ex officiis ducimus nihil laudantium
          voluptatibus inventore autem aliquam. Delectus architecto enim labore
          minus voluptatum neque porro dolorem unde, quo tenetur aspernatur
          cumque placeat pariatur, eum qui id iusto, cum accusantium commodi
          expedita animi tempora similique. Delectus perferendis voluptatum
          voluptas corrupti sit laborum nemo quisquam magnam sapiente, deserunt
          culpa animi quia ratione. Odio ipsam, sapiente vel autem, sint error
          quis quibusdam repellendus, ab ipsa aliquam unde deserunt ipsum
          doloribus nemo id accusamus quisquam dolorem quam fuga voluptas amet
          obcaecati! Est saepe quis suscipit nulla laudantium corrupti repellat
          quibusdam culpa officia! Dicta libero soluta, veniam voluptates
          explicabo, placeat deleniti distinctio quia alias velit ducimus,
          officiis tempore laboriosam ipsam? Quasi ducimus, ad veniam ipsam et
          culpa, aperiam id dolores ullam voluptatem odio recusandae enim,
          nostrum maxime ut eos officia ab explicabo similique suscipit
          deleniti! Necessitatibus, optio! Praesentium, pariatur provident
          voluptate necessitatibus est, aperiam voluptatum, esse aut nihil
          consequuntur explicabo vero. Doloremque sequi eligendi obcaecati
          placeat? Fugiat doloremque aliquam debitis labore assumenda animi,
          itaque cumque ad adipisci quae quis deleniti, quam harum sed! Voluptas
          aperiam omnis ut ad commodi odio distinctio nesciunt aut? Quasi autem
          ipsum accusantium quae voluptatem doloribus quidem, fuga beatae in cum
          quis repellat? Hic vel at officiis recusandae debitis rem, assumenda
          laboriosam blanditiis illum suscipit, numquam error repellat
          voluptatum provident? Aliquid id iste, ullam magni aperiam et
          recusandae molestias error incidunt! Magni tenetur consequatur at
          blanditiis. Velit reprehenderit harum reiciendis esse eum
          exercitationem natus consequatur voluptates earum laudantium sit,
          beatae tempora voluptatum culpa? Enim adipisci rerum, cum similique
          nesciunt fuga quasi ipsam officiis dignissimos veritatis tempora
          cupiditate reiciendis repudiandae quam unde alias quod nisi dolorem
          voluptates hic minus doloribus. Autem deleniti sit consequuntur
          ducimus animi repellat repellendus assumenda ad maxime reprehenderit
          accusamus magni at corporis error, commodi quis. Dolorem vitae
          voluptatibus soluta minima illo maiores corrupti a, nobis recusandae
          voluptatem magnam expedita explicabo accusantium odio assumenda
          perferendis debitis exercitationem neque est eligendi molestiae
          officiis autem sed consectetur? Praesentium molestias tempore quod!
          Saepe obcaecati iure nam alias aspernatur vitae modi ea minima sequi
          neque corporis consectetur, reiciendis quisquam eum nesciunt dolores
          dolore quis cupiditate. Repudiandae esse mollitia non iure hic aliquid
          fuga cupiditate. Corporis, voluptates natus. Eaque inventore ullam
          suscipit quos fuga. Error, nisi nesciunt molestias suscipit mollitia
          minus sapiente, officia porro atque facilis delectus optio pariatur,
          tempora illo rerum ipsum beatae dolores fugiat labore cum ratione
          veniam fuga molestiae nostrum. Quasi, ad officiis neque aperiam sed
          corporis sequi tempore, sunt earum ut aliquid dicta labore placeat?
          Sapiente blanditiis enim ullam, quos deserunt unde maiores itaque a
          dolore. Debitis placeat totam voluptas saepe exercitationem nisi
          repellat corporis iste beatae veniam expedita dolor quod, neque
          laudantium modi esse maiores rerum dignissimos provident aspernatur.
          Sed molestiae eos officiis quia, officia exercitationem reprehenderit
          ab labore natus praesentium omnis unde voluptatum dolorum aut autem a
          dolore eum ad cupiditate animi quaerat! Odit eveniet omnis magni,
          iusto suscipit ex officia quia distinctio temporibus quaerat obcaecati
          veritatis voluptas sed officiis saepe. Commodi doloremque eveniet
          sequi quas magnam debitis at culpa amet molestiae inventore quod
          laborum modi porro voluptas, corporis quaerat soluta sapiente? Optio
          cum aut ipsa voluptatibus. Neque sunt eius nisi, eveniet magnam
          repellendus nihil explicabo? Mollitia eligendi sapiente ad nam harum
          voluptate ipsam doloribus velit similique facere deleniti, quod autem
          blanditiis est adipisci laborum nihil. Quas earum, ipsam assumenda
          nesciunt sint exercitationem voluptas dicta aliquid cupiditate fuga
          consequuntur ea molestiae perferendis porro nemo maiores eaque
          provident! Saepe iste dolorem qui vitae, illum eum modi, eos commodi
          ducimus perspiciatis magni velit quae dignissimos fugiat delectus?
          Nihil iure sed illo ullam aliquid nam earum rerum eligendi delectus.
          Illum earum temporibus eveniet amet dolor ex provident quaerat
          obcaecati ducimus? Fuga illo voluptatem placeat, quo ullam amet
          laboriosam maiores eaque rerum nihil impedit ipsa a distinctio
          asperiores tempore nesciunt, ab, ducimus assumenda. Molestiae eveniet
          reiciendis nemo rem, sunt enim laborum dicta facilis sapiente fugit
          id, hic minus ea consectetur dolore? Quod magni facere, nulla in vitae
          quasi ipsum quisquam laudantium illo consequatur autem dolore vel
          ratione repudiandae. Quidem, ducimus asperiores. Nam esse eos nihil
          repellendus aliquid vero odit debitis, facere officiis architecto
          molestiae sapiente libero ad! Nihil inventore consequatur itaque ipsam
          assumenda eum distinctio numquam, qui officiis, natus repudiandae
          magni totam aliquam nostrum soluta. Maxime illo, odio aliquid magni
          facilis qui omnis provident eum voluptatum repellendus aut doloremque
          cum dignissimos, adipisci iste. Recusandae natus delectus, explicabo a
          odio consectetur. Dolor facilis impedit aliquid? Rerum asperiores
          adipisci odio iste impedit doloremque nostrum quasi eius harum, dicta
          minus quisquam culpa molestias at optio, animi neque architecto, nisi
          facere eveniet! Temporibus nesciunt deserunt ipsam, error optio
          dolorum sunt reiciendis, expedita in corporis cupiditate vitae rem
          dicta veritatis blanditiis magnam nihil iste consequatur animi sed
          perspiciatis natus eius. Illo laborum maxime unde quos culpa rem
          saepe, dicta iure voluptatibus nesciunt deleniti vitae, obcaecati
          accusamus facilis dolorum ipsum praesentium magni porro, illum
          necessitatibus voluptates asperiores sint cumque hic. Eligendi dicta
          magni quasi facere soluta molestias labore quidem tempora totam
          explicabo, atque placeat architecto, velit commodi quaerat unde.
          Doloribus optio consequatur error nemo impedit eligendi minima
          quisquam accusamus ipsam debitis? Rem quidem blanditiis nesciunt,
          totam iste sit, dolor illum dolore assumenda consequuntur voluptatibus
          tenetur vero commodi eveniet voluptas quis debitis eligendi nihil
          corporis quod? Qui, facere. Temporibus quod quaerat impedit, ex
          maiores ab quidem voluptatem nobis odit aspernatur eius eveniet
          architecto sit eligendi hic inventore facere alias, minus laborum. Aut
          sunt nostrum cum, quas quaerat, dolorum repudiandae velit autem enim
          labore unde debitis nemo eaque eos fugit facilis consectetur
          perferendis ipsum voluptatum, harum ullam! Praesentium excepturi,
          voluptatem vero dolorem repudiandae corrupti officiis quibusdam
          exercitationem? Eaque ea, velit tempora commodi sunt, ducimus in
          repudiandae architecto nihil possimus fuga totam error quam? Vero
          aliquid, consectetur esse dolorem quidem error et similique recusandae
          dignissimos voluptatum quis tempore accusantium, eum cupiditate
          repellat repellendus laboriosam nam odio repudiandae? Pariatur
          eligendi doloribus nesciunt exercitationem, saepe, voluptatum laborum
          debitis beatae provident rerum odit sit ipsum ipsa incidunt culpa.
          Libero eum, nulla explicabo velit consequatur ea et harum alias odio
          consequuntur veniam ad ex totam fugiat doloribus necessitatibus
          cupiditate magnam dignissimos corrupti hic rem labore sunt quaerat.
        </div>
        <LazyLoadImage
          alt='tabiat rasm'
          src='https://i.pinimg.com/originals/b7/f9/41/b7f941ba09bef2c6c62569bf41dc9e67.jpg'
        />
        <img
          className='mt-32'
          src='https://i.pinimg.com/originals/ef/84/8c/ef848c4f95e920b79263dfe983bf320b.jpg'
          alt=''
        />
      </div>
    </div>
  );
}

export default React.memo(Home);
