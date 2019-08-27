const express = require('express');
const nanoid = require('nanoid');

let koneksi = require('../koneksi');
let urlModel = require('../models/Url');

exports.addUrl = function(req, res) {
	let url = req.body.url;
	let kode = nanoid(7);
	if (url) {
		let data = new urlModel({ url : url, kode_url : kode });
		data.save(function (err) {
		  if (err) return handleError(err);
		  	let response = {
		  		'url' : process.env.HOST+':'+process.env.PORT+'/'+kode
		  	}
		  	res.json({ status: 200, value: response });
		});
	}
};

exports.updateUrl  = function(req, res) {
	let url_short  = req.body.url;
	let url_update = req.body.url_update;
	let getkode = url_short.split( '/' );
	let kode = getkode[1];
	if (kode !== '') {
		urlModel.findOneAndUpdate({kode_url : kode},{url : url_update}).then(respon=>{
			res.json({ status: 200, message: 'Url Berhasi Diupdate'});
		})
	}
};


exports.hapusUrl = function(req, res) {
	let url_short = req.body.url;
	let getkode = url_short.split( '/' );
	if (getkode[1] !== '') {
		urlModel.deleteOne({kode_url : getkode[1]},function(err,respon){
			if (err) return handleError(err);
			res.json({ status: 200, message: 'Url Berhasi Dihapus'});
		});
	}
	
};

exports.clickUrl = function(req, res) {
	let url_short = req.body.url;
	if (url_short) {
		let getkode = url_short.split( '/' );
		if (getkode[1] !== '') {
			urlModel.findOne({kode_url : getkode[1]}).then(respon=>{
				if (respon == null) {
					res.json({ status: 404, message: 'Url Not Found'});
				}else{
			 		res.json({status: 200, value :respon.url});
			 	}	
			})
		}
	}
}