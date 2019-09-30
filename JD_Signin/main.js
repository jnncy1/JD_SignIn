auto.waitFor();
//京东签到
app.startActivity({
    data: "openapp.jdmobile://virtual?params=%7B%22category%22%3A%22jump%22%2C%22modulename%22%3A%22JDReactCollectJDBeans%22%2C%22appname%22%3A%22JDReactCollectJDBeans%22%2C%22ishidden%22%3A%22true%22%2C%22des%22%3A%22jdreactcommon%22%2C%22param%22%3A%7B%22source%22%3A%22%22%2C%22shareMark%22%3A%22%22%2C%22transparentenable%22%3Atrue%2C%22page%22%3A%22collectJDBeansHomePage%22%7D%2C%22sourceType%22%3A%222%22%2C%22sourceValue%22%3A%221%22%2C%22M_sourceFrom%22%3A%22ljdshare%22%2C%22msf_type%22%3A%22click%22%2C%22m_param%22%3A%7B%22m_source%22%3A%220%22%2C%22event_series%22%3A%7B%7D%2C%22jda%22%3A%22122270672.15657867566391942107949.1565786757.1566129699.1566920977.3%22%2C%22usc%22%3A%22androidapp%22%2C%22ucp%22%3A%22t_335139774%22%2C%22umd%22%3A%22appshare%22%2C%22utr%22%3A%22CopyURL%22%2C%22jdv%22%3A%22122270672%7Candroidapp%7Ct_335139774%7Cappshare%7CCopyURL%7C1566920977829%22%2C%22ref%22%3A%22https%3A%2F%2Fbean.m.jd.com%2Fshare%2Findex.action%3Fad_od%3Dshare%26utm_source%3Dandroidapp%26utm_medium%3Dappshare%26utm_campaign%3Dt_335139774%26utm_term%3DCopyURL%22%2C%22psn%22%3A%2215657867566391942107949%7C3%22%2C%22psq%22%3A1%2C%22unpl%22%3A%22%22%2C%22pc_source%22%3A%22%22%2C%22mba_muid%22%3A%2215657867566391942107949%22%2C%22mba_sid%22%3A%221566920977831781596122039158%22%2C%22std%22%3A%22MO-J2011-1%22%2C%22par%22%3A%22ad_od%3Dshare%26utm_source%3Dandroidapp%26utm_medium%3Dappshare%26utm_campaign%3Dt_335139774%26utm_term%3DCopyURL%22%2C%22event_id%22%3A%22MJingDouHome_ShareSign%22%2C%22mt_xid%22%3A%22%22%2C%22mt_subsite%22%3A%22%22%7D%2C%22SE%22%3A%7B%22mt_subsite%22%3A%22%22%2C%22__jdv%22%3A%22122270672%7Candroidapp%7Ct_335139774%7Cappshare%7CCopyURL%7C1566920977829%22%2C%22unpl%22%3A%22%22%2C%22__jda%22%3A%22122270672.15657867566391942107949.1565786757.1566129699.1566920977.3%22%7D%7D"
})
sleep(500);
text("领京豆").waitFor();
sleep(500);
if (text("已连续签到").exists()) {
    toast("你已签到");
    sleep(500);
} else {
    //因为通过点击text无效  所以通过获取text的范围中心点来点击
    var b = text("签到领京豆").findOne().bounds();
    click(b.centerX(), b.centerY());
    log("京东_京豆签到完成");
    toast("京东_京豆签到完成");
    sleep(500);
    back();
    sleep(500);
}
back();
sleep(1000);
app.startActivity({
    data: "openapp.jdmobile://virtual?params={\"category\":\"jump\",\"des\":\"couponCenter\"}"
})
sleep(1000);
text("签到领现金券").waitFor();
sleep(500);
if (text("明天继续").exists()) {
    toast("你已签到");
    sleep(500);
} else {
    text("签到领券").waitFor();
    sleep(500);
    while (!click("签到领券"));
    log("京东_领券签到完成");
}
back();
sleep(1000);
//京东金融签到
app.startActivity({
    data: "jdmobile://share?jumpType=7&jumpUrl=1373&channel=default&sourceUrl=1000*https%3A%2F%2Fu.jr.jd.com%2FdownloadApp%2Findex.html%3Fid%3D1708&source=&time=1566923315288"
})
sleep(1000);
className("android.view.View").desc("连签7天 奖励最高翻3倍info").waitFor();
sleep(500);
for (var i = 1; i < 8; i++) {
    var q = "已连续签到" + i + "天";
    //log(q);
    if (desc("签到领钢镚").exists()) {
        sleep(500);
        desc("签到领钢镚").findOne().click();
        log("京东金融_签到领钢镚完毕");
        for (var i=0;i<4;i++) {
            back();
            sleep(1000);
        }

    } else if (desc(q).exists()) {
        toast("你已签到");
        sleep(500);
        for (var i=0;i<3;i++) {
            back();
            sleep(1000);
        }
    }
}

//京东双签领奖励
app.startActivity({
    data: "jdmobile://share?jumpType=7&jumpUrl=1374&channel=default&sourceUrl=1000*https%3A%2F%2Fu.jr.jd.com%2FdownloadApp%2Findex.html%3Fid%3D1709&source=&time=1566923694481"
})
sleep(500);
desc("活动规则").waitFor();
sleep(500);
if (desc("今日已领取").exists()) {
    toast("你已领取,脚本即将结束");
    sleep(500);
    exit();
} else {
    desc("完成双签领取").waitFor();
    sleep(500);
    desc("完成双签领取").findOne().click();
    log("京东双签完成");
    toast("京东双签完成");
}