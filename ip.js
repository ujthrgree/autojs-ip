importClass(java.net.InetAddress);
importClass(java.net.NetworkInterface);
importClass(java.net.SocketException);
importClass(java.util.Enumeration);
importClass(java.util.regex.Matcher);
importClass(java.util.regex.Pattern);

//匹配C类地址的IP
regexCIp = "^192\\.168\\.(\\d{1}|[1-9]\\d|1\\d{2}|2[0-4]\\d|25\\d)\\.(\\d{1}|[1-9]\\d|1\\d{2}|2[0-4]\\d|25\\d)$";
//匹配A类地址
regexAIp = "^10\\.(\\d{1}|[1-9]\\d|1\\d{2}|2[0-4]\\d|25\\d)\\.(\\d{1}|[1-9]\\d|1\\d{2}|2[0-4]\\d|25\\d)\\.(\\d{1}|[1-9]\\d|1\\d{2}|2[0-4]\\d|25\\d)$";
//匹配B类地址
regexBIp = "^172\\.(1[6-9]|2\\d|3[0-1])\\.(\\d{1}|[1-9]\\d|1\\d{2}|2[0-4]\\d|25\\d)\\.(\\d{1}|[1-9]\\d|1\\d{2}|2[0-4]\\d|25\\d)$";
 
 
function getHostIp() {

    ip = Pattern.compile("(" + regexAIp + ")|" + "(" + regexBIp + ")|" + "(" + regexCIp + ")");
    etworkInterfaces = null;
    try {
        networkInterfaces = NetworkInterface.getNetworkInterfaces();
    } catch (e) {
        toastLog(e);
    }

    while (networkInterfaces.hasMoreElements()) {
        networkInterface = networkInterfaces.nextElement();
        inetAddresses = networkInterface.getInetAddresses();
        while (inetAddresses.hasMoreElements()) {
            address = inetAddresses.nextElement();
            hostAddress = address.getHostAddress();
            matcher = ip.matcher(hostAddress);
        if (matcher.matches()) {
            hostIp = hostAddress;
                return hostIp;
            }
        }
    }
     return null;
}

toastLog(getHostIp())
