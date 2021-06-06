<?php

// https://docs.neos.io/cms/manual/extending-neos-with-php-flow/custom-eel-helpers
// declare(strict_types=1);

namespace MHS\Site\Eel\Helper;

use Neos\Flow\Annotations as Flow;
use Neos\Eel\ProtectedContextAwareInterface;

class PortfolioHelper implements ProtectedContextAwareInterface {

    // /**
    //  * Wrap the incoming string in curly brackets
    //  *
    //  * @param $text string
    //  * @return string
    //  */
    // public function wrapInCurlyBrackets($text) {
    //     return '{' . $text . '}';
    // }

    /**
     * All methods are considered safe, i.e. can be executed from within Eel
     *
     * @param string $methodName
     * @return boolean
     */
    public function allowsCallOfMethod($methodName) {
        return true;
    }
}
