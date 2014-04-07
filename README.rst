Hasadna Logo
============

Hasadna logo is rendered using html canvas and JavaScript. While this might
sound strange, it works quite well, as the logo is basiclly a hub and spoke.
What's more, keeping it in code allows the logo to evolve - the current
version is a fork of the original logo Mushon coded for Hasadna's third
birthday.

Usage
=====

To use the logo in your html pages you need to add a canvas element and
specify its size::

  <canvas class="hasadnaLogo" width="100" height="100"></canvas>

To get the magic going, add just before the `</body>`::

  <script src="http://s3-eu-west-1.amazonaws.com/hasadna-design/hasadnaLogo.min.js" type="text/javascript"></script>

If you aren't using jquery, you'll need two lines of code::

  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
  <script src="http://s3-eu-west-1.amazonaws.com/hasadna-design/hasadnaLogo.min.js" type="text/javascript"></script>

And that's all folks!

