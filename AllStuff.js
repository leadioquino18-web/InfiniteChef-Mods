// More info about enabling, testing, and submitting mods: https://R74ncom.github.io/InfiniteChef-Mods/

// Add a basic ingredient using the 'liquid' ingredient as a base
addIngredient("gochujang",{
    color:"#ff0000", //red
    type:"liquid", //will inherit all properties of the 'fruit' ingredient
    reactions: {
    soy_sauce: {set1: "tteokboki_sauce"}
    }
});
// Add a detailed ingredient with custom Shape and other properties
// All Shape IDs can be found here: https://R74n.com/shapes/
// A list of properties can be found at the top of: https://R74n.com/cook/foodData.js
addIngredient("complete_gochujang",{ //ID should be lowercase with underscores
    color:"#ff0000", //red
    innerColor:"#ff0000", //red
    type:"liquid", ///type can be any other ingredient
  reactions: {
    soy_sauce: {set1: "tteokboki_sauce"}
  }
    shape:"droplets_some_flat"
});
addIngredient("tteokboki",{ //ID should be lowercase with underscores
    color:"#ff0000", //red
    innerColor:"#ff0000", //red
    type:"rice", ///type can be any other ingredient
});
// Add ingredient with reactions
addIngredient("tteokboki_sauce",{
    type:"water",
    color:"#ff0000", //red
    reactions: {
        // rice: { set1:"tteokboki" }
    }
    }   
});
// Change attributes of existing ingredients
// Add a simple recipe
// Add a recipe only in Stack Mode
// Add a recipe that can't have any other ingredients
addRecipe("cheese_sauce+cheese_sauce", "i like my cheese drippy bruh");
// Add a recipe with an optional ingredient
addRecipe("cake+sprinkles?+chocolate+ice_cream","ice cream chocolate cake");
// Add a simple tool to interact with ingredients
addTool("red_dyer", {
    func: function(placed) { placed.h = 0; },
    shape:"liquid"
})

// Add a tool with more properties
addTool("red_dyer", {
    func: function(placed) { placed.h = 0; },
    onSelect: function() { alert("Use on an ingredient to dye it red!"); },
    whileOn: function() { console.log("Dyer selected."); },
    onDeselect: function() { alert("Goodbye!"); },
    onClick: function(x,y) { console.log(x,y) },
    shape:"liquid",
    spin: true
})
