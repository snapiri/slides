#!/usr/bin/perl
use strict;
use warnings;

use Expect;

my $e = Expect->new;
$e->raw_pty(1);

$e->spawn("bc") or die "Cannot run bc\n";
$e->expect(1, "warranty") or die "no warranty\n";

$e->send("23+7\n");
$e->expect(1, 29) or die "no sum\n";

$e->send("quit\n");

print "Success\n";

