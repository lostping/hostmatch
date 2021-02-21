<?php

/**
 * Extends Loginmask to enter the server url freely
 * Only use this if you enabled an array of predefined hosts,
 * but still want to enter another mail host yourself on the fly,
 * and don't want to add it to your default host list
 */
class hostmatch extends rcube_plugin
{
  public $task = 'login|logout';

  function init()
  {
    $this->include_script('hostmatch.js');
    $this->add_hook('logout_after', array($this, 'logout'));
  }
  function logout($args)
  {
    $this->include_script('hostmatch.js');
  }
}

