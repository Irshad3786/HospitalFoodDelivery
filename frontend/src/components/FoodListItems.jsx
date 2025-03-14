import React, { useState } from 'react'

function FoodListItems({searchTerm , onSelectFood}) {

    const [FoodItem , setFoodItem] = useState('')
    const [ShowData , setShowData] = useState(false)


    const foodItems = [
    "One apple with milk and some rice",
    "Oatmeal with honey and almonds",
    "Boiled eggs with toast and butter",
    "Vegetable soup with brown bread",
    "Grilled chicken with steamed vegetables",
    "Dal with chapati and cucumber salad",
    "Rice with curd and pickle",
    "Fruits salad with yogurt",
    "Milk with banana and dry fruits",
    "Soup with crackers",
    "Idli with sambar and coconut chutney",
    "Poha with peanuts and lemon",
    "Grilled fish with sauteed greens",
    "Khichdi with curd",
    "Dosa with potato masala and mint chutney",
    "Aloo puri with chana masala",
    "Chole bhature with salad",
    "Biryani with raita",
    "Rajma rice with onion salad",
    "Mutton curry with naan",
    "Paneer tikka with green chutney",
    "Methi paratha with curd",
    "Upma with coconut chutney",
    "Scrambled eggs with avocado toast",
    "Pancakes with maple syrup and fruits",
    "Waffles with honey and berries",
    "Smoothie bowl with granola",
    "Peanut butter toast with banana slices",
    "Paratha with butter and pickle",
    "Uttapam with tomato chutney",
    "Rava dosa with sambar",
    "Masala omelet with whole wheat bread",
    "Cornflakes with milk and nuts",
    "Cheese omelet with brown bread",
    "Sprouts chaat with lemon juice",
    "Pesarattu with coconut chutney",
    "Bread pakora with mint chutney",
    "Ragi malt with dry fruits",
    "Vegetable stuffed sandwich",
    "Quinoa porridge with nuts and honey",
    "Egg bhurji with roti",
    "French toast with honey",
    "Moong dal chilla with mint chutney",
    "Paneer bhurji with paratha",
    "Vegetable poha with coconut garnish",
    "Vegetable uttapam with sambar",
    "Sabudana khichdi with yogurt",
    "Mushroom omelet with whole wheat bread",
    "Masala oats with yogurt",
    "Chia seed pudding with fruits",
    "Banana pancakes with peanut butter",
    "Tomato basil soup with whole wheat toast",
    "Vegetable fried rice with soy sauce",
    "Chana masala with rice",
    "Mixed vegetable curry with roti",
    "Spinach and cheese quesadilla",
    "Pasta with pesto and grilled chicken",
    "Lentil soup with garlic bread",
    "Beetroot salad with feta cheese",
    "Cucumber and yogurt raita with chapati",
    "Grilled paneer sandwich with mint chutney",
    "Rajma wrap with whole wheat tortilla",
    "Hummus with pita bread and olives",
    "Falafel with tahini sauce",
    "Chicken curry with basmati rice",
    "Mutton biryani with mirchi ka salan",
    "Fish curry with steamed rice",
    "Lemon garlic shrimp with quinoa",
    "Tofu stir-fry with brown rice",
    "Vegetable lasagna with garlic bread",
    "Pumpkin soup with sunflower seeds",
    "Chicken tikka with naan",
    "Egg curry with paratha",
    "Tandoori chicken with mint chutney",
    "Kadhi pakora with jeera rice",
    "Aloo gobi with chapati",
    "Methi thepla with curd and pickle",
    "Dal makhani with butter naan",
    "Kashmiri pulao with dry fruits",
    "Schezwan noodles with stir-fried vegetables",
    "Mushroom risotto with parmesan cheese",
    "Sushi rolls with soy sauce",
    "Paneer butter masala with naan",
    "Stuffed bell peppers with quinoa",
    "Chicken Caesar salad with dressing",
    "Vegetable handvo with garlic chutney",
    "Chili paneer with fried rice",
    "Shahi tukda with rabri",
    "Gajar ka halwa with almonds",
    "Rice kheer with saffron",
    "Mango sticky rice",
    "Fruit custard with dry fruits",
    "Blueberry yogurt parfait",
    "Almond and dates smoothie",
    "Coconut water with chia seeds",
    "Green smoothie with spinach and banana",
    "Protein shake with banana and peanut butter",
    "Turmeric milk with honey",
    "Lemon ginger tea with honey",
    "Masala chai with biscuits",
    "South Indian filter coffee",
    "Cold coffee with whipped cream",
    "Carrot and beetroot juice",
    "Avocado toast with cherry tomatoes",
    "Broccoli and cheese soup with whole wheat toast",
    "Egg fried rice with soy sauce",
    "Oats upma with nuts",
    "Sattu drink with jaggery",
    "Ghee rice with dal tadka",
    "Chicken shawarma with garlic sauce",
    "Kathi roll with mint chutney",
    "Malai kofta with naan",
    "Pav bhaji with buttered buns",
    "Baingan bharta with roti",
    "Stuffed karela with chapati",
    "Vegetable chop suey",
    "Pesarattu dosa with tomato chutney",
    "Butter chicken with tandoori roti",
    "Shrimp scampi with linguine",
    "Baked salmon with lemon butter",
    "Spinach and ricotta stuffed shells",
    "Chickpea and spinach curry",
    "Samosa with tamarind chutney",
    "Szechuan tofu with fried rice",
    "Eggplant parmesan with marinara sauce",
    "Vada pav with spicy chutney",
    "Khandvi with sesame seeds",
    "Mooli paratha with white butter",
    "Stuffed mushrooms with cheese",
    "Thai green curry with jasmine rice",
    "Vietnamese pho with chicken",
    "Bulgur wheat salad with pomegranate",
    "Shepherd’s pie with ground lamb",
    "Quinoa stuffed zucchini boats",
    "Lemon garlic chicken with mashed potatoes",
    "Okra fry with roti",
    "Tandoori fish with mint dip",
    "Chocolate mousse with strawberries",
    "Pineapple upside-down cake",
    "Crepes with nutella and banana",
    "Apple cinnamon porridge",
    "Honey-glazed carrots with almonds",
    "Steamed momos with spicy chutney",
    "Pineapple fried rice with cashews",
    "Mediterranean chickpea salad",
    "Basil pesto pasta with sun-dried tomatoes",
    "Dal dhokli with jaggery",
    "Paneer korma with jeera rice",
    "Greek yogurt with granola and berries",
    "Burrito bowl with guacamole",
    "Bruschetta with fresh tomatoes",
    "Peach cobbler with vanilla ice cream",
    "Fudgy brownies with walnuts",
    "Pineapple coconut smoothie",
    "Falooda with rose syrup",
    "Tapioca pudding with saffron",
    "Baked zucchini fries with ranch dip",
    "Roasted chickpeas with paprika",
    "Chili garlic noodles with veggies",
    "Spinach and ricotta stuffed ravioli",
    "Mexican rice with black beans",
    "Kimchi fried rice with egg",
    "Bhel puri with chutney",
    "Choco lava cake with ice cream",
    "Mashed sweet potatoes with cinnamon",
    "Baked stuffed bell peppers",
    "Churros with chocolate sauce",
    "Nachos with cheese and salsa",
    "Paneer kathi roll with mint yogurt",
    "Methi matar malai with naan",
    "Gond ke laddoo with dry fruits",
    "Tilgul with sesame seeds",
    "Besan chilla with mint yogurt",
    "Pineapple sorbet with coconut flakes",
    ];


    const filteredFoodItems = foodItems.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const SubmitingFood =(val)=>{
        setFoodItem(val)
        setShowData(true)
        onSelectFood(val)
    }
    
  return (
    <div>
        <div className='bg-white shadow-md  max-h-44 overflow-y-scroll '>
        <table className='min-w-full table-auto border-collapse font-Varela text-xs sm:text-base md:text-base'>
            <thead>
                <tr className="bg-gray-200">
                    <th className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border bg-[#00FFAA] ">FOOD ITEMS</th>
                </tr>
            </thead>
            <tbody>
                
            {filteredFoodItems.length > 0 ? (
                            filteredFoodItems.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-300 cursor-pointer">
                                    <td 
                                        className="px-2 sm:px-4 sm:py-2 md:px-4 md:py-2 py-1 border"
                                        data-value={item}
                                        onClick={(e) => SubmitingFood(e.target.dataset.value)}
                                    >
                                        {item}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td className="px-4 py-2 border text-center text-gray-500">No matching food items</td>
                            </tr>
                        )}


            </tbody>
        </table>
        </div>

        {ShowData && (<div className=' w-[100%] h-fit flex justify-center items-center pt-3 '>

            <table className='bg-green-100 font-roboto text-xs sm:text-base md:text-base'>
                <thead>
                    <tr>
                    <th className='px-2  border sm:py-2 md:px-4 md:py-2 py-1'>SELECTED FOOD ITEM</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td className='px-2  border sm:py-2 md:px-4 md:py-2 py-1'>{FoodItem}</td>
                </tr>

            
                </tbody>
            </table>
        </div>)}

        </div>
  )
}

export default FoodListItems