# Explanation of App.css

```css
.App {
  text-align: center;
  font-family: Arial, sans-serif;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #f1f1f1;
  margin: 10px 0;
  padding: 10px;
  border-radius: 4px;
}
```

Let's break down each CSS rule:

1. `.App`: This styles the main container of our app.
   - `text-align: center;`: Centers the text within the container.
   - `font-family: Arial, sans-serif;`: Sets the font to Arial, or any sans-serif font if Arial is not available.
   - `max-width: 400px;`: Limits the width of the container to 400 pixels.
   - `margin: 0 auto;`: Centers the container horizontally.
   - `padding: 20px;`: Adds 20 pixels of padding inside the container.

2. `input`: Styles the input field.
   - `padding: 10px;`: Adds 10 pixels of padding inside the input.
   - `font-size: 16px;`: Sets the font size to 16 pixels.
   - `border: 1px solid #ddd;`: Adds a light grey border.
   - `border-radius: 4px;`: Rounds the corners of the input.
   - `margin-right: 10px;`: Adds 10 pixels of margin to the right of the input.

3. `button`: Styles the "Add Task" button.
   - `padding: 10px 20px;`: Adds 10 pixels of vertical padding and 20 pixels of horizontal padding.
   - `font-size: 16px;`: Sets the font size to 16 pixels.
   - `background-color: #4CAF50;`: Sets the background color to green.
   - `color: white;`: Sets the text color to white.
   - `border: none;`: Removes the default border.
   - `border-radius: 4px;`: Rounds the corners of the button.
   - `cursor: pointer;`: Changes the cursor to a pointer when hovering over the button.

4. `ul`: Styles the unordered list that contains our todo items.
   - `list-style-type: none;`: Removes the default bullet points.
   - `padding: 0;`: Removes the default padding.

5. `li`: Styles each individual todo item in the list.
   - `background-color: #f1f1f1;`: Sets a light grey background.
   - `margin: 10px 0;`: Adds vertical margin between items.
   - `padding: 10px;`: Adds padding inside each item.
   - `border-radius: 4px;`: Rounds the corners of each item.
