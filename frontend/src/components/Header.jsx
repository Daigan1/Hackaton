import React from 'react';
import ReactDOM from 'react-dom/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import completed from '../Pages/Completetasks';


function Header() {
    return (
        <div>
            <div className="pb-5 flex flex-row flex-wrap items-center  text-white border-solid border border rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-60">
                <img className="h-20 w-40 mt-5 ml-5" src="https://www.shutterstock.com/image-photo/example-word-written-on-wooden-260nw-1765482248.jpg" />
                <a href="/" className="mt-auto mb-auto mr-5 ml-3">Tasks</a>
                <a href="../Pages/Completetasks" className="mt-auto mb-auto mr-5">Completed Tasks</a>



                <form>
                    <label for="default-search" className="mb-2 text-sm font-medium text-white-900 sr-only text-white ">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                            <svg aria-hidden="true" className="w-5aaaaaaaa h-5 text-white-500 text-white-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-white-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 
                        bg-gray-700 
                        border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search Tasks" required />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Search</button>
                    </div>
                </form>


                <div className='flex items-center ml-auto mr-5 '>
                    <div className="border w-fit rounded-xl m-5 shadow-sm  border border-gray-300 rounded-lg bg-gray-50">
                        <button className="px-4 py-2 rounded-l-xl text-black bg-blue-700 hover:bg-green-600 transition" onClick={handleCreate}  >Create Task</button>
                    </div>
                </div>
        



            </div>




        </div>

    );



}

function handleCreate(event) {
    Swal.fire({


        title: "Login",
        html: `
        <form>
    <div class="relative z-0 w-full mb-6 group">
        <input type="text" name="company_name" id="company_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" " required />
        <label for="company_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company
            Name</label>
    </div>
    <div class="relative z-0 w-full mb-6 group">
        <input type="text" name="rep_name" id="rep_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" " required />
        <label for="rep_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Representative
            Name</label>
    </div>
    <div class="relative z-0 w-full mb-6 group">
        <input type="text" name="text_title" id="text_title"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" " required />
        <label for="text_title"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Task
            Title </label>
    </div>

    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Description</label>
    <textarea id="message" rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Leave a comment..."></textarea>

        <fieldset>
            <legend class="sr-only">Tech Stack</legend>
          
            <div class="flex items-center mb-4">
                <input checked id="checkbox-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" >
                <label for="checkbox-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">HTML<a href="#" class="text-blue-600 hover:underline dark:text-blue-500"></a>.</label>
            </div>
          
            <div class="flex items-center mb-4">
                <input id="checkbox-2" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="checkbox-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">CSS</label>
            </div>
          
            <div class="flex items-center mb-4">
                <input id="checkbox-3" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="checkbox-3" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">JS</label>
            </div>
         
          </fieldset>
   
    </div>
    <button type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>`,
    }
    )}




export default Header;