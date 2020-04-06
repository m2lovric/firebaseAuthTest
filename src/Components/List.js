import React from 'react';
import '../List.scss';

class List extends React.Component {
  constructor(){
    super();
  }

  componentDidMount(){
    const li = document.querySelectorAll('.liIssue');
    li.forEach( el => {
      el.addEventListener('click', e => {
        let child = e.path[1].lastChild;
        if(child.style.display === 'none'){
          child.style.display = 'block';
        }else{
          child.style.display = 'none';
        }
      })
    })
  }

  render(){
    return(
      <section>
        <ul>
          <li className="liIssue">
            <div className="title">Issue</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nesciunt delectus corrupti a, perferendis aspernatur hic? Qui at placeat velit, itaque quod quibusdam inventore maxime minus ullam! Laudantium, eligendi totam.Id vitae maiores expedita temporibus eius natus soluta deserunt molestias autem maxime, incidunt nemo quidem veniam iste eaque quas minus vero. Numquam consequatur dolores dolorem, ipsum sapiente quidem quos nulla.
            </div>
          </li>
          <li className="liIssue">
            <div className="title">Issue</div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ullam sint suscipit tenetur assumenda debitis quod, hic, quidem, eum accusamus maxime cum eaque ipsum minus aut fugit temporibus in iure?Eius iusto reiciendis excepturi! Fuga, nisi hic sit perferendis laudantium aperiam voluptatibus expedita consequuntur consequatur adipisci cum dolor et itaque voluptates dolorum doloribus minima sunt deleniti perspiciatis quidem. Architecto, odio!
            </div>
          </li>
          <li className="liIssue">
            <div className="title">Issue</div>
            <div className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit illo, nam, minus, vero rerum sapiente corporis ratione molestias eveniet earum blanditiis nihil quas dolores fugit quisquam animi laudantium numquam doloremque.Praesentium dolor unde quo alias laborum? Aliquam, ducimus provident et quo corrupti aut! Quia pariatur ex cupiditate voluptatum distinctio unde rem, at facere, voluptatem commodi nobis dolorem voluptates debitis praesentium!
            </div>
          </li>
          <li className="liIssue">
            <div className="title">Issue</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, facere eaque. Odit eligendi aut itaque aliquam excepturi sit cupiditate officiis porro nesciunt quod, natus distinctio tempore possimus labore ullam nisi?Impedit autem id necessitatibus facere ipsum nobis, dolor alias harum optio modi! Ullam accusantium odio, quae totam facere dolore esse nobis! Debitis praesentium id necessitatibus ipsum iure omnis, dicta rerum?
            </div>
          </li>
        </ul>
      </section>
    )
  }
}

export default List;