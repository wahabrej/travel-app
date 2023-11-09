import React from 'react';
import { RiCustomerService2Full, RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p className='py-4'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, voluptates ea recusandae fugiat odio at sunt nesciunt hic ullam ratione nihil ducimus corporis aut soluta, quam incidunt culpa modi suscipit eius consequuntur harum fugit. Odio optio, molestiae, incidunt enim fuga autem velit neque itaque doloribus nostrum laudantium sit vero eos, error quae deserunt dolorum! Eius eum, error molestias iusto illo provident nulla aut tempora. Natus tempore iure animi nesciunt voluptatibus consequuntur perferendis placeat excepturi unde. Fugit commodi aperiam laboriosam suscipit est tenetur, eligendi sapiente assumenda porro optio accusantium officia dolorum architecto eum impedit, ratione ipsum perferendis? Soluta aliquid ea sint ipsum impedit cum sequi! Sed, dolores impedit? Eveniet exercitationem pariatur, est minus ab iste, voluptatum mollitia adipisci, a reprehenderit ratione veritatis? Minus quos laborum voluptatem. Minus illo, itaque magnam perferendis eligendi voluptatibus placeat omnis deleniti adipisci explicabo ratione error voluptatum doloremque, consequatur obcaecati praesentium natus ab neque blanditiis numquam quia nam. Fuga, qui ipsa voluptas laudantium eos autem illo voluptates temporibus consectetur amet, eaque rem? Ullam ea, officiis porro sint accusamus ab non consequuntur omnis? Reprehenderit ipsam quis, sunt numquam vel officiis aliquid voluptates. Illum cupiditate ex corrupti, distinctio rem harum sapiente voluptatem tenetur perferendis. Quo vitae saepe deserunt quam.
          </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
                <h3 className='py-2'>OUR SERVICES</h3>
                <p className='py-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, vel.</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
            <h3 className='py-2'>OUR SERVICES</h3>
                <p className='py-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, vel.</p>
            </div>
          </div>
        </div>
      </div>

      <div>
          <div className='border text-center'>
              <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
              <p className='py-4'>12 HOURS LEFT</p>
              <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
          </div>
          <form className='w-full'>
              <div className='flex flex-col my-2'>
                  <label>Destination</label>
                  <select className='border rounded-md p-2'>
                      <option>Istambul</option>
                      <option>Dubai</option>
                      <option>Maldives</option>
                      <option>Qater</option>
                      <option>Java</option>
                  </select>
              </div>
              <div className='flex flex-col my-4'>
                  <label>Check-In</label>
                  <input className='border rounded-md p-2' type="date" />
              </div>
              <div className='flex flex-col my-2'>
                  <label>Check-Out</label>
                  <input className='border rounded-md p-2' type="date" />
              </div>
                <button className='w-full my-4'>Rates & Availabilities</button>
          </form>
      </div>
    </div>
  );
};

export default Search;
