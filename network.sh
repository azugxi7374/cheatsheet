ifconfig

ping 127.0.0.1
ping 8.8.8.8
ping google.com

traceroute google.com

dig google.com #=> 72.217.175.78
dig A google.com #=> 72.217.175.78
dig NS google.com #=> ns4.google.com.  ns1.google.com.  ns3.google.com.  ns2.google.com.
dig CNAME www.yahoo.jp #=> edge12.g.yimg.jp.

dig google.com @8.8.8.8


