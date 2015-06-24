var React           = require('react');

var ReactAddons    = require('react/addons'); // You also need to require the addons
var ReactTestUtils = React.addons.TestUtils ; // <- YEAH!

var GenericButton   = require('../../src/js/components/GenericButton.js');


describe("Bogus test ", function(){
    it("Should pass the test", function(){
        expect(true).toBe(true);
    })
     it("should fail the test", function(){
        expect(true).toBe(true);
    })
    it("Should read a string", function(){
        expect("Hello").toEqual("Hello")
    })
});

describe("Test the GenericButon", function(){
    var genericButtonInstance;
    var genericBttContainer = document.createElement('div');

    beforeEach(function(){
        genericButtonInstance = React.renderComponent(<GenericButton />, genericBttContainer)
    });

    afterEach(function(){
        if (genericButtonInstance && genericButtonInstance.isMounted()) {
            // Only components with a parent will be unmounted
            React.unmountComponentAtNode(genericButtonInstance.getDOMNode().parent);
        }
    });

    it("GenericButton be display the text Click Me!.", function(){
        var heading = ReactTestUtils.findRenderedDOMComponentWithTag(genericButtonInstance, "button");
        expect(heading.getDOMNode().textContent).toBe("Click Me!.");
    })
})
