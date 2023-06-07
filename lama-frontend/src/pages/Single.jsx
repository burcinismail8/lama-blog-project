import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/Single.scss";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
const Single = () => {
  return (
    <>
      <NavBar />
      <div className="single">
        <div className="content">
          <img src="" alt="" />
          <div className="user">
            <img src="" alt="" />
          </div>
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={"/write?edit=2"}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
            magnam a consequuntur
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            sapiente dolorum, similique laboriosam exercitationem omnis itaque
            eius ad fugit deleniti officia necessitatibus fugiat deserunt hic
            error accusamus, culpa harum? Atque. Excepturi tenetur quia
            praesentium vitae placeat doloremque ab consequuntur beatae quos,
            reprehenderit deserunt, sint libero et corrupti nobis illo
            laboriosam sit inventore neque, saepe tempore cupiditate
            dignissimos. Possimus, quaerat explicabo! Quae dolor nihil quod
            praesentium excepturi minima voluptatibus. Quae alias eum distinctio
            modi hic nulla illum mollitia. Adipisci non at quasi aut
            voluptatibus delectus quisquam! Reprehenderit sunt nulla accusamus
            porro. Quidem a, quas harum omnis perspiciatis impedit doloribus in
            atque itaque fugiat, sed aliquid veritatis earum sunt molestiae
            praesentium consequuntur soluta ab corporis temporibus dolorem
            dolores aliquam voluptate. Placeat, molestiae? Laborum pariatur ut
            placeat cupiditate culpa, suscipit labore eius ea dolorem possimus
            magni molestiae debitis hic iste tempore doloribus neque quasi
            nesciunt enim quam amet asperiores tenetur qui? Exercitationem,
            voluptate. Nulla debitis beatae, tempora non totam cumque pariatur
            deserunt? Eum minus illo incidunt qui aliquam voluptate maiores
            recusandae eos dolorem dignissimos, tenetur, facilis nihil ullam,
            officia adipisci accusantium iusto itaque! Impedit quae, est eaque
            sed qui optio dolorum recusandae necessitatibus dolor autem commodi
            minima aperiam harum. Ea culpa hic et necessitatibus quo excepturi
            harum fugit reiciendis! Architecto autem earum et! Quaerat deserunt,
            dolorem quisquam blanditiis molestias fuga! Repellat minima tenetur
            corrupti eos laudantium maxime deserunt nemo, placeat dicta earum
            commodi quisquam eaque quasi saepe recusandae praesentium
            accusantium nisi architecto consequatur. Architecto explicabo
            cupiditate tempore nobis, itaque ut corrupti culpa iure ullam atque
            recusandae quos illum, natus aperiam eveniet sapiente voluptatem
            dicta asperiores magnam inventore quae, ad optio? Ab, aliquam
            placeat? Ab corporis sequi natus quos rem, minima incidunt dicta
            quas. Laborum provident aperiam laboriosam maiores autem pariatur
            necessitatibus. Maxime ipsam labore officia? Possimus velit eius
            accusantium quas sit cum sunt. Vitae perferendis officia fugiat quos
            quisquam, et quo rem unde error quam, magni eos aliquid nemo alias
            ea architecto id nihil voluptates pariatur earum non repellat
            doloremque. Dolorum, fuga nobis! Delectus libero non, ratione
            distinctio debitis ducimus praesentium temporibus possimus saepe
            enim officia molestiae. Officia soluta eveniet dolor, vero
            distinctio eligendi nam iste harum laboriosam voluptates atque
            magnam dicta iure. Modi delectus pariatur enim fuga iusto
            dignissimos non ut est libero quos vel voluptate laborum eius
            laboriosam corporis, impedit, beatae iure nam eum! Eius molestias,
            nobis minus perferendis doloribus dolorem. Necessitatibus ea, autem
            quasi neque obcaecati reiciendis ullam nemo maiores odio error dolor
            earum aut consequatur aperiam quaerat facere! Architecto ipsum esse
            delectus adipisci, natus molestias voluptates aspernatur beatae
            provident. Esse hic, quod officiis ex labore quia commodi totam
            perspiciatis consequatur nulla a quam nam explicabo ad! Accusamus
            totam non alias, tempora corporis, temporibus error ea doloribus
            quis beatae dignissimos.
          </p>
        </div>
        <Menu />
      </div>
      <Footer />
    </>
  );
};

export default Single;
