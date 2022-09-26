# Registration-Form

Here you can find a simple registration form made for vefskolinn course
It was created for both Accessibility and JavaScript Form guides

The registration form takes several inputs:

- Full Name
- Phone Number
- Email Address
- Password
- Confirm Password

## Form Validation

In this registration form, I've used two types of validation

### HTML Validation

Thanks to the use of HTML built-in form validation I could make this form work easily.  
I've just passed different required values, patterns and titles to display the errors to the user if something was not correct.  
You can read about the built-in HTML validation over here:  
https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation

Here also you can find all the elements used for the input tag in HTML:  
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input

### JavaScript Form Validation

Using vanilla JavaScript I build a bit more complex registration form validator
code is explained block by block in the script.js file.
registration button click starts the function that precisely checks if each input was filled correctly according to the set pattern.  
Each error is displayed underneath the input border.

Websites that I used to support myself:  
https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Constraint_validation
https://www.w3schools.com/jsref/event_preventdefault.asp

## Accessibility

The website was tested by WAVE extension to search for any errors all of them were fixed.  
Also, it went through the contrast checker and size check to make sure there is no problem with the visibility of different elements.  
To help people with visual impairments all the inputs filed contain aria-label tags, and thanks to that computers can convert the text into speech.  
To help navigate the same people there is an option for tab navigation each input field will switch and will be marked by blue border color if a person has a problem with distinguishing different colors the border also is way thicker when elements are selected so even colorblind people can notice switching between different inputs.

Thanks for your time! Hope you had fun!
