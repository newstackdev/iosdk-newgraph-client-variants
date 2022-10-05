"use strict";
/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = exports.HttpClient = exports.ContentType = void 0;
var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
})(ContentType = exports.ContentType || (exports.ContentType = {}));
var HttpClient = /** @class */ (function () {
    function HttpClient(apiConfig) {
        var _a;
        if (apiConfig === void 0) { apiConfig = {}; }
        var _this = this;
        this.baseUrl = "https://api-eu-dev.newlife.io/creator";
        this.securityData = null;
        this.abortControllers = new Map();
        this.customFetch = function () {
            var fetchParams = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                fetchParams[_i] = arguments[_i];
            }
            return fetch.apply(void 0, fetchParams);
        };
        this.baseApiParams = {
            credentials: "same-origin",
            headers: {},
            redirect: "follow",
            referrerPolicy: "no-referrer",
        };
        this.setSecurityData = function (data) {
            _this.securityData = data;
        };
        this.contentFormatters = (_a = {},
            _a[ContentType.Json] = function (input) {
                return input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input;
            },
            _a[ContentType.FormData] = function (input) {
                return Object.keys(input || {}).reduce(function (formData, key) {
                    var property = input[key];
                    formData.append(key, property instanceof Blob
                        ? property
                        : typeof property === "object" && property !== null
                            ? JSON.stringify(property)
                            : "".concat(property));
                    return formData;
                }, new FormData());
            },
            _a[ContentType.UrlEncoded] = function (input) { return _this.toQueryString(input); },
            _a);
        this.createAbortSignal = function (cancelToken) {
            if (_this.abortControllers.has(cancelToken)) {
                var abortController_1 = _this.abortControllers.get(cancelToken);
                if (abortController_1) {
                    return abortController_1.signal;
                }
                return void 0;
            }
            var abortController = new AbortController();
            _this.abortControllers.set(cancelToken, abortController);
            return abortController.signal;
        };
        this.abortRequest = function (cancelToken) {
            var abortController = _this.abortControllers.get(cancelToken);
            if (abortController) {
                abortController.abort();
                _this.abortControllers.delete(cancelToken);
            }
        };
        this.request = function (_a) { return __awaiter(_this, void 0, void 0, function () {
            var secureParams, _b, requestParams, queryString, payloadFormatter, responseFormat;
            var _this = this;
            var body = _a.body, secure = _a.secure, path = _a.path, type = _a.type, query = _a.query, format = _a.format, baseUrl = _a.baseUrl, cancelToken = _a.cancelToken, params = __rest(_a, ["body", "secure", "path", "type", "query", "format", "baseUrl", "cancelToken"]);
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
                            this.securityWorker;
                        if (!_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.securityWorker(this.securityData)];
                    case 1:
                        _b = (_c.sent());
                        _c.label = 2;
                    case 2:
                        secureParams = (_b) ||
                            {};
                        requestParams = this.mergeRequestParams(params, secureParams);
                        queryString = query && this.toQueryString(query);
                        payloadFormatter = this.contentFormatters[type || ContentType.Json];
                        responseFormat = format || requestParams.format;
                        return [2 /*return*/, this.customFetch("".concat(baseUrl || this.baseUrl || "").concat(path).concat(queryString ? "?".concat(queryString) : ""), __assign(__assign({}, requestParams), { headers: __assign(__assign({}, (type && type !== ContentType.FormData ? { "Content-Type": type } : {})), (requestParams.headers || {})), signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0, body: typeof body === "undefined" || body === null ? null : payloadFormatter(body) })).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                                var r, data, _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            r = response;
                                            r.data = null;
                                            r.error = null;
                                            if (!!responseFormat) return [3 /*break*/, 1];
                                            _a = r;
                                            return [3 /*break*/, 3];
                                        case 1: return [4 /*yield*/, response[responseFormat]()
                                                .then(function (data) {
                                                if (r.ok) {
                                                    r.data = data;
                                                }
                                                else {
                                                    r.error = data;
                                                }
                                                return r;
                                            })
                                                .catch(function (e) {
                                                r.error = e;
                                                return r;
                                            })];
                                        case 2:
                                            _a = _b.sent();
                                            _b.label = 3;
                                        case 3:
                                            data = _a;
                                            if (cancelToken) {
                                                this.abortControllers.delete(cancelToken);
                                            }
                                            if (!response.ok)
                                                throw data;
                                            return [2 /*return*/, data];
                                    }
                                });
                            }); })];
                }
            });
        }); };
        Object.assign(this, apiConfig);
    }
    HttpClient.prototype.encodeQueryParam = function (key, value) {
        var encodedKey = encodeURIComponent(key);
        return "".concat(encodedKey, "=").concat(encodeURIComponent(typeof value === "number" ? value : "".concat(value)));
    };
    HttpClient.prototype.addQueryParam = function (query, key) {
        return this.encodeQueryParam(key, query[key]);
    };
    HttpClient.prototype.addArrayQueryParam = function (query, key) {
        var _this = this;
        var value = query[key];
        return value.map(function (v) { return _this.encodeQueryParam(key, v); }).join("&");
    };
    HttpClient.prototype.toQueryString = function (rawQuery) {
        var _this = this;
        var query = rawQuery || {};
        var keys = Object.keys(query).filter(function (key) { return "undefined" !== typeof query[key]; });
        return keys
            .map(function (key) { return (Array.isArray(query[key]) ? _this.addArrayQueryParam(query, key) : _this.addQueryParam(query, key)); })
            .join("&");
    };
    HttpClient.prototype.addQueryParams = function (rawQuery) {
        var queryString = this.toQueryString(rawQuery);
        return queryString ? "?".concat(queryString) : "";
    };
    HttpClient.prototype.mergeRequestParams = function (params1, params2) {
        return __assign(__assign(__assign(__assign({}, this.baseApiParams), params1), (params2 || {})), { headers: __assign(__assign(__assign({}, (this.baseApiParams.headers || {})), (params1.headers || {})), ((params2 && params2.headers) || {})) });
    };
    return HttpClient;
}());
exports.HttpClient = HttpClient;
/**
 * @title newlife-creator-api-eu-dev
 * @version 2022-08-15T13:39:44Z
 * @baseUrl https://api-eu-dev.newlife.io/creator
 */
var Api = /** @class */ (function (_super) {
    __extends(Api, _super);
    function Api() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.auth = {
            /**
             * No description
             *
             * @name CallbackPathList
             * @request GET:/auth/callback/{path+}
             */
            callbackPathList: function (path, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/auth/callback/{path+}", method: "GET" }, params));
            },
            /**
             * No description
             *
             * @name OptionsAuth
             * @request OPTIONS:/auth/callback/{path+}
             */
            optionsAuth: function (path, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/auth/callback/{path+}", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name ProviderPathList
             * @request GET:/auth/provider/{path+}
             */
            providerPathList: function (path, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/auth/provider/{path+}", method: "GET" }, params));
            },
            /**
             * No description
             *
             * @name OptionsAuth2
             * @request OPTIONS:/auth/provider/{path+}
             * @originalName optionsAuth
             * @duplicate
             */
            optionsAuth2: function (path, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/auth/provider/{path+}", method: "OPTIONS", type: ContentType.Json }, params));
            },
        };
        _this.folder = {
            /**
             * No description
             *
             * @name FolderList
             * @request GET:/folder
             * @secure
             */
            folderList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/folder", method: "GET", query: query, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsFolder
             * @request OPTIONS:/folder
             */
            optionsFolder: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/folder", method: "OPTIONS", type: ContentType.Json }, params));
            },
        };
        _this.info = {
            /**
             * No description
             *
             * @name InfoList
             * @request GET:/info
             */
            infoList: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/info", method: "GET", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name OptionsInfo
             * @request OPTIONS:/info
             */
            optionsInfo: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/info", method: "OPTIONS", type: ContentType.Json }, params));
            },
        };
        _this.infoAuth = {
            /**
             * No description
             *
             * @name InfoAuthList
             * @request GET:/info-auth
             * @secure
             */
            infoAuthList: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/info-auth", method: "GET", secure: true, type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name OptionsInfoAuth
             * @request OPTIONS:/info-auth
             */
            optionsInfoAuth: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/info-auth", method: "OPTIONS", type: ContentType.Json }, params));
            },
        };
        _this.mood = {
            /**
             * No description
             *
             * @name MoodList
             * @request GET:/mood
             * @secure
             */
            moodList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood", method: "GET", query: query, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name MoodCreate
             * @request POST:/mood
             * @secure
             */
            moodCreate: function (MoodCreateRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood", method: "POST", body: MoodCreateRequest, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name MoodUpdate
             * @request PUT:/mood
             * @secure
             */
            moodUpdate: function (MoodUpdateRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood", method: "PUT", body: MoodUpdateRequest, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsMood
             * @request OPTIONS:/mood
             */
            optionsMood: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name AttachPostUpdate
             * @request PUT:/mood/attach/post
             * @secure
             */
            attachPostUpdate: function (MoodAttachRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/attach/post", method: "PUT", body: MoodAttachRequest, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsMood2
             * @request OPTIONS:/mood/attach/post
             * @originalName optionsMood
             * @duplicate
             */
            optionsMood2: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/attach/post", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name ListTopList
             * @request GET:/mood/list/top
             * @secure
             */
            listTopList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/list/top", method: "GET", query: query, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsMood3
             * @request OPTIONS:/mood/list/top
             * @originalName optionsMood
             * @duplicate
             */
            optionsMood3: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/list/top", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name PostsList
             * @request GET:/mood/posts
             * @secure
             */
            postsList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/posts", method: "GET", query: query, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsMood4
             * @request OPTIONS:/mood/posts
             * @originalName optionsMood
             * @duplicate
             */
            optionsMood4: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/posts", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name RateCreate
             * @request POST:/mood/rate
             * @secure
             */
            rateCreate: function (RatingUpdateRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/rate", method: "POST", body: RatingUpdateRequest, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsMood5
             * @request OPTIONS:/mood/rate
             * @originalName optionsMood
             * @duplicate
             */
            optionsMood5: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/rate", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name UploadCreate
             * @request POST:/mood/upload
             * @secure
             */
            uploadCreate: function (UploadRequestGeneric, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/upload", method: "POST", body: UploadRequestGeneric, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsMood6
             * @request OPTIONS:/mood/upload
             * @originalName optionsMood
             * @duplicate
             */
            optionsMood6: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/mood/upload", method: "OPTIONS", type: ContentType.Json }, params));
            },
        };
        _this.newcoin = {
            /**
             * No description
             *
             * @name BcaccopenCreate
             * @request POST:/newcoin/bcaccopen
             * @secure
             */
            bcaccopenCreate: function (BcAccCreateRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/bcaccopen", method: "POST", body: BcAccCreateRequest, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsNewcoin
             * @request OPTIONS:/newcoin/bcaccopen
             */
            optionsNewcoin: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/bcaccopen", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name BcauthethCreate
             * @request POST:/newcoin/bcautheth
             */
            bcauthethCreate: function (BcAuthEthRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/bcautheth", method: "POST", body: BcAuthEthRequest, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsNewcoin2
             * @request OPTIONS:/newcoin/bcautheth
             * @originalName optionsNewcoin
             * @duplicate
             */
            optionsNewcoin2: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/bcautheth", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name BccolcreateCreate
             * @request POST:/newcoin/bccolcreate
             * @secure
             */
            bccolcreateCreate: function (BcCollectionCreateRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/bccolcreate", method: "POST", body: BcCollectionCreateRequest, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsNewcoin3
             * @request OPTIONS:/newcoin/bccolcreate
             * @originalName optionsNewcoin
             * @duplicate
             */
            optionsNewcoin3: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/bccolcreate", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name BcgetaccCreate
             * @request POST:/newcoin/bcgetacc
             * @secure
             */
            bcgetaccCreate: function (BcGetAccountInfo, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/bcgetacc", method: "POST", body: BcGetAccountInfo, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsNewcoin4
             * @request OPTIONS:/newcoin/bcgetacc
             * @originalName optionsNewcoin
             * @duplicate
             */
            optionsNewcoin4: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/bcgetacc", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name BcgetpoolCreate
             * @request POST:/newcoin/bcgetpool
             * @secure
             */
            bcgetpoolCreate: function (BcGetPoolInfo, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/bcgetpool", method: "POST", body: BcGetPoolInfo, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsNewcoin5
             * @request OPTIONS:/newcoin/bcgetpool
             * @originalName optionsNewcoin
             * @duplicate
             */
            optionsNewcoin5: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/bcgetpool", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name BckeypairCreate
             * @request POST:/newcoin/bckeypair
             * @secure
             */
            bckeypairCreate: function (BcKeyPairCreateRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/bckeypair", method: "POST", body: BcKeyPairCreateRequest, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsNewcoin6
             * @request OPTIONS:/newcoin/bckeypair
             * @originalName optionsNewcoin
             * @duplicate
             */
            optionsNewcoin6: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/bckeypair", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name BcmaindaodldunstakeCreate
             * @request POST:/newcoin/bcmaindaodldunstake
             * @secure
             */
            bcmaindaodldunstakeCreate: function (BcStakeMainDAORequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/bcmaindaodldunstake", method: "POST", body: BcStakeMainDAORequest, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsNewcoin7
             * @request OPTIONS:/newcoin/bcmaindaodldunstake
             * @originalName optionsNewcoin
             * @duplicate
             */
            optionsNewcoin7: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/bcmaindaodldunstake", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name BcmaindaoinstunstakeCreate
             * @request POST:/newcoin/bcmaindaoinstunstake
             * @secure
             */
            bcmaindaoinstunstakeCreate: function (BcStakePoolRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/bcmaindaoinstunstake", method: "POST", body: BcStakePoolRequest, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsNewcoin8
             * @request OPTIONS:/newcoin/bcmaindaoinstunstake
             * @originalName optionsNewcoin
             * @duplicate
             */
            optionsNewcoin8: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/bcmaindaoinstunstake", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name BcmaindaostakeCreate
             * @request POST:/newcoin/bcmaindaostake
             * @secure
             */
            bcmaindaostakeCreate: function (BcStakeMainDAORequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/bcmaindaostake", method: "POST", body: BcStakeMainDAORequest, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsNewcoin9
             * @request OPTIONS:/newcoin/bcmaindaostake
             * @originalName optionsNewcoin
             * @duplicate
             */
            optionsNewcoin9: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/bcmaindaostake", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name BcmintassetCreate
             * @request POST:/newcoin/bcmintasset
             * @secure
             */
            bcmintassetCreate: function (BcMintAssetRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/bcmintasset", method: "POST", body: BcMintAssetRequest, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsNewcoin10
             * @request OPTIONS:/newcoin/bcmintasset
             * @originalName optionsNewcoin
             * @duplicate
             */
            optionsNewcoin10: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/bcmintasset", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name BcpoolcreateCreate
             * @request POST:/newcoin/bcpoolcreate
             * @secure
             */
            bcpoolcreateCreate: function (BcPoolCreateRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/bcpoolcreate", method: "POST", body: BcPoolCreateRequest, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsNewcoin11
             * @request OPTIONS:/newcoin/bcpoolcreate
             * @originalName optionsNewcoin
             * @duplicate
             */
            optionsNewcoin11: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/bcpoolcreate", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name BcpoolstakeCreate
             * @request POST:/newcoin/bcpoolstake
             * @secure
             */
            bcpoolstakeCreate: function (BcStakePoolRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/bcpoolstake", method: "POST", body: BcStakePoolRequest, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsNewcoin12
             * @request OPTIONS:/newcoin/bcpoolstake
             * @originalName optionsNewcoin
             * @duplicate
             */
            optionsNewcoin12: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/bcpoolstake", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name DaoCreateCreate
             * @request POST:/newcoin/dao/create
             * @secure
             */
            daoCreateCreate: function (BcCreateDaoRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/dao/create", method: "POST", body: BcCreateDaoRequest, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsNewcoin13
             * @request OPTIONS:/newcoin/dao/create
             * @originalName optionsNewcoin
             * @duplicate
             */
            optionsNewcoin13: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/dao/create", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name DaoProposalCreate
             * @request POST:/newcoin/dao/proposal
             * @secure
             */
            daoProposalCreate: function (BcCreateDaoProposal, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/dao/proposal", method: "POST", body: BcCreateDaoProposal, secure: true, type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name OptionsNewcoin14
             * @request OPTIONS:/newcoin/dao/proposal
             * @originalName optionsNewcoin
             * @duplicate
             */
            optionsNewcoin14: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/dao/proposal", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name DaoProposalWhitelistCreate
             * @request POST:/newcoin/dao/proposal-whitelist
             * @secure
             */
            daoProposalWhitelistCreate: function (BcCreateWhitelistDaoProposal, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/dao/proposal-whitelist", method: "POST", body: BcCreateWhitelistDaoProposal, secure: true, type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name OptionsNewcoin15
             * @request OPTIONS:/newcoin/dao/proposal-whitelist
             * @originalName optionsNewcoin
             * @duplicate
             */
            optionsNewcoin15: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/dao/proposal-whitelist", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name DaoProposalWhitelistApproveCreate
             * @request POST:/newcoin/dao/proposal-whitelist/approve
             * @secure
             */
            daoProposalWhitelistApproveCreate: function (BcApproveDaoProposalRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/dao/proposal-whitelist/approve", method: "POST", body: BcApproveDaoProposalRequest, secure: true, type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name OptionsNewcoin16
             * @request OPTIONS:/newcoin/dao/proposal-whitelist/approve
             * @originalName optionsNewcoin
             * @duplicate
             */
            optionsNewcoin16: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/dao/proposal-whitelist/approve", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name DaoProposalWhitelistExecuteCreate
             * @request POST:/newcoin/dao/proposal-whitelist/execute
             * @secure
             */
            daoProposalWhitelistExecuteCreate: function (BcDaoProposalExecuteRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/dao/proposal-whitelist/execute", method: "POST", body: BcDaoProposalExecuteRequest, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsNewcoin17
             * @request OPTIONS:/newcoin/dao/proposal-whitelist/execute
             * @originalName optionsNewcoin
             * @duplicate
             */
            optionsNewcoin17: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/dao/proposal-whitelist/execute", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name DaoProposalWhitelistListList
             * @request GET:/newcoin/dao/proposal-whitelist/list
             * @secure
             */
            daoProposalWhitelistListList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/dao/proposal-whitelist/list", method: "GET", query: query, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsNewcoin18
             * @request OPTIONS:/newcoin/dao/proposal-whitelist/list
             * @originalName optionsNewcoin
             * @duplicate
             */
            optionsNewcoin18: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/dao/proposal-whitelist/list", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name DaoProposalApproveCreate
             * @request POST:/newcoin/dao/proposal/approve
             * @secure
             */
            daoProposalApproveCreate: function (BcApproveDaoProposalRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/dao/proposal/approve", method: "POST", body: BcApproveDaoProposalRequest, secure: true, type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name OptionsNewcoin19
             * @request OPTIONS:/newcoin/dao/proposal/approve
             * @originalName optionsNewcoin
             * @duplicate
             */
            optionsNewcoin19: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/dao/proposal/approve", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name DaoProposalExecuteCreate
             * @request POST:/newcoin/dao/proposal/execute
             * @secure
             */
            daoProposalExecuteCreate: function (BcDaoProposalExecuteRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/dao/proposal/execute", method: "POST", body: BcDaoProposalExecuteRequest, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsNewcoin20
             * @request OPTIONS:/newcoin/dao/proposal/execute
             * @originalName optionsNewcoin
             * @duplicate
             */
            optionsNewcoin20: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/dao/proposal/execute", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name DaoProposalListList
             * @request GET:/newcoin/dao/proposal/list
             * @secure
             */
            daoProposalListList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/dao/proposal/list", method: "GET", query: query, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsNewcoin21
             * @request OPTIONS:/newcoin/dao/proposal/list
             * @originalName optionsNewcoin
             * @duplicate
             */
            optionsNewcoin21: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/dao/proposal/list", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name DaoProposalVoteCreate
             * @request POST:/newcoin/dao/proposal/vote
             * @secure
             */
            daoProposalVoteCreate: function (BcDaoProposalVoteRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/dao/proposal/vote", method: "POST", body: BcDaoProposalVoteRequest, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsNewcoin22
             * @request OPTIONS:/newcoin/dao/proposal/vote
             * @originalName optionsNewcoin
             * @duplicate
             */
            optionsNewcoin22: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/dao/proposal/vote", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name DaoProposalVotesList
             * @request GET:/newcoin/dao/proposal/votes
             * @secure
             */
            daoProposalVotesList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/dao/proposal/votes", method: "GET", query: query, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsNewcoin23
             * @request OPTIONS:/newcoin/dao/proposal/votes
             * @originalName optionsNewcoin
             * @duplicate
             */
            optionsNewcoin23: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/dao/proposal/votes", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name DaoWhitelistList
             * @request GET:/newcoin/dao/whitelist
             * @secure
             */
            daoWhitelistList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/dao/whitelist", method: "GET", query: query, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsNewcoin24
             * @request OPTIONS:/newcoin/dao/whitelist
             * @originalName optionsNewcoin
             * @duplicate
             */
            optionsNewcoin24: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/dao/whitelist", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name DaoWithdrawVoteDepositCreate
             * @request POST:/newcoin/dao/withdrawVoteDeposit
             * @secure
             */
            daoWithdrawVoteDepositCreate: function (BcDaoWidthdrawVoteDepositRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/dao/withdrawVoteDeposit", method: "POST", body: BcDaoWidthdrawVoteDepositRequest, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsNewcoin25
             * @request OPTIONS:/newcoin/dao/withdrawVoteDeposit
             * @originalName optionsNewcoin
             * @duplicate
             */
            optionsNewcoin25: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/newcoin/dao/withdrawVoteDeposit", method: "OPTIONS", type: ContentType.Json }, params));
            },
        };
        _this.payment = {
            /**
             * No description
             *
             * @name StripeIntentCreate
             * @request POST:/payment/stripe/intent
             * @secure
             */
            stripeIntentCreate: function (PaymentStripePaymentIntentCreateRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/payment/stripe/intent", method: "POST", body: PaymentStripePaymentIntentCreateRequest, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsPayment
             * @request OPTIONS:/payment/stripe/intent
             */
            optionsPayment: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/payment/stripe/intent", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name StripeSubscriptionPaymentCreate
             * @request POST:/payment/stripe/subscription/payment
             * @secure
             */
            stripeSubscriptionPaymentCreate: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/payment/stripe/subscription/payment", method: "POST", secure: true, type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name OptionsPayment2
             * @request OPTIONS:/payment/stripe/subscription/payment
             * @originalName optionsPayment
             * @duplicate
             */
            optionsPayment2: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/payment/stripe/subscription/payment", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name StripeWebhookCreate
             * @request POST:/payment/stripe/webhook
             */
            stripeWebhookCreate: function (PaymentStripeWebhookRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/payment/stripe/webhook", method: "POST", body: PaymentStripeWebhookRequest, type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name OptionsPayment3
             * @request OPTIONS:/payment/stripe/webhook
             * @originalName optionsPayment
             * @duplicate
             */
            optionsPayment3: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/payment/stripe/webhook", method: "OPTIONS", type: ContentType.Json }, params));
            },
        };
        _this.post = {
            /**
             * No description
             *
             * @name PostList
             * @request GET:/post
             * @secure
             */
            postList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post", method: "GET", query: query, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name PostCreate
             * @request POST:/post
             * @secure
             */
            postCreate: function (PostCreateRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post", method: "POST", body: PostCreateRequest, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name PostUpdate
             * @request PUT:/post
             * @secure
             */
            postUpdate: function (PostUpdateRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post", method: "PUT", body: PostUpdateRequest, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsPost
             * @request OPTIONS:/post
             */
            optionsPost: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name ListSearchList
             * @request GET:/post/list/search
             * @secure
             */
            listSearchList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post/list/search", method: "GET", query: query, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsPost2
             * @request OPTIONS:/post/list/search
             * @originalName optionsPost
             * @duplicate
             */
            optionsPost2: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post/list/search", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name ListTagsSearchList
             * @request GET:/post/list/tags-search
             * @secure
             */
            listTagsSearchList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post/list/tags-search", method: "GET", query: query, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsPost3
             * @request OPTIONS:/post/list/tags-search
             * @originalName optionsPost
             * @duplicate
             */
            optionsPost3: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post/list/tags-search", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name ListTopList
             * @request GET:/post/list/top
             * @secure
             */
            listTopList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post/list/top", method: "GET", query: query, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsPost4
             * @request OPTIONS:/post/list/top
             * @originalName optionsPost
             * @duplicate
             */
            optionsPost4: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post/list/top", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name RateCreate
             * @request POST:/post/rate
             * @secure
             */
            rateCreate: function (RatingUpdateRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post/rate", method: "POST", body: RatingUpdateRequest, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsPost5
             * @request OPTIONS:/post/rate
             * @originalName optionsPost
             * @duplicate
             */
            optionsPost5: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post/rate", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name ReportCreate
             * @request POST:/post/report
             * @secure
             */
            reportCreate: function (ReportUpdateRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post/report", method: "POST", body: ReportUpdateRequest, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsPost6
             * @request OPTIONS:/post/report
             * @originalName optionsPost
             * @duplicate
             */
            optionsPost6: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post/report", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name UploadCreate
             * @request POST:/post/upload
             * @secure
             */
            uploadCreate: function (UploadRequestGeneric, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post/upload", method: "POST", body: UploadRequestGeneric, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsPost7
             * @request OPTIONS:/post/upload
             * @originalName optionsPost
             * @duplicate
             */
            optionsPost7: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post/upload", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name UtilsRemoteMetaProxyList
             * @request GET:/post/utils/remote-meta-proxy
             * @secure
             */
            utilsRemoteMetaProxyList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post/utils/remote-meta-proxy", method: "GET", query: query, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsPost8
             * @request OPTIONS:/post/utils/remote-meta-proxy
             * @originalName optionsPost
             * @duplicate
             */
            optionsPost8: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/post/utils/remote-meta-proxy", method: "OPTIONS", type: ContentType.Json }, params));
            },
        };
        _this.search = {
            /**
             * No description
             *
             * @name CreativeList
             * @request GET:/search/creative
             * @secure
             */
            creativeList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/search/creative", method: "GET", query: query, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsSearch
             * @request OPTIONS:/search/creative
             */
            optionsSearch: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/search/creative", method: "OPTIONS", type: ContentType.Json }, params));
            },
        };
        _this.upload = {
            /**
             * No description
             *
             * @name NodeCreate
             * @request POST:/upload/node
             * @secure
             */
            nodeCreate: function (UploadRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/upload/node", method: "POST", body: UploadRequest, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUpload
             * @request OPTIONS:/upload/node
             */
            optionsUpload: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/upload/node", method: "OPTIONS", type: ContentType.Json }, params));
            },
        };
        _this.user = {
            /**
             * No description
             *
             * @name UserList
             * @request GET:/user
             * @secure
             */
            userList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user", method: "GET", query: query, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name UserCreate
             * @request POST:/user
             * @secure
             */
            userCreate: function (UserCreateRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user", method: "POST", body: UserCreateRequest, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name UserUpdate
             * @request PUT:/user
             * @secure
             */
            userUpdate: function (UserUpdateRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user", method: "PUT", body: UserUpdateRequest, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name UserDelete
             * @request DELETE:/user
             * @secure
             */
            userDelete: function (UserDeleteRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user", method: "DELETE", body: UserDeleteRequest, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser
             * @request OPTIONS:/user
             */
            optionsUser: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name ActivityStreamList
             * @request GET:/user/activityStream
             * @secure
             */
            activityStreamList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/activityStream", method: "GET", query: query, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser2
             * @request OPTIONS:/user/activityStream
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser2: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/activityStream", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name AvailabilityList
             * @request GET:/user/availability
             */
            availabilityList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/availability", method: "GET", query: query, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser3
             * @request OPTIONS:/user/availability
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser3: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/availability", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name CurrentList
             * @request GET:/user/current
             * @secure
             */
            currentList: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/current", method: "GET", secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser4
             * @request OPTIONS:/user/current
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser4: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/current", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name InviteCreate
             * @request POST:/user/invite
             * @secure
             */
            inviteCreate: function (UserInviteRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/invite", method: "POST", body: UserInviteRequest, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser5
             * @request OPTIONS:/user/invite
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser5: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/invite", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name InviteHashList
             * @request GET:/user/invite/hash
             */
            inviteHashList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/invite/hash", method: "GET", query: query, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser6
             * @request OPTIONS:/user/invite/hash
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser6: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/invite/hash", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name InviteesList
             * @request GET:/user/invitees
             * @secure
             */
            inviteesList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/invitees", method: "GET", query: query, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser7
             * @request OPTIONS:/user/invitees
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser7: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/invitees", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name InvitorList
             * @request GET:/user/invitor
             * @secure
             */
            invitorList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/invitor", method: "GET", query: query, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser8
             * @request OPTIONS:/user/invitor
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser8: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/invitor", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name ListSearchList
             * @request GET:/user/list/search
             * @secure
             */
            listSearchList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/list/search", method: "GET", query: query, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser9
             * @request OPTIONS:/user/list/search
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser9: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/list/search", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name ListTopList
             * @request GET:/user/list/top
             * @secure
             */
            listTopList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/list/top", method: "GET", query: query, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser10
             * @request OPTIONS:/user/list/top
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser10: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/list/top", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name MoodsList
             * @request GET:/user/moods
             * @secure
             */
            moodsList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/moods", method: "GET", query: query, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser11
             * @request OPTIONS:/user/moods
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser11: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/moods", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name PreregisterCreate
             * @request POST:/user/preregister
             * @secure
             */
            preregisterCreate: function (UserPreRegisterRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/preregister", method: "POST", body: UserPreRegisterRequest, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser12
             * @request OPTIONS:/user/preregister
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser12: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/preregister", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name RatedInList
             * @request GET:/user/rated/in
             * @secure
             */
            ratedInList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/rated/in", method: "GET", query: query, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser13
             * @request OPTIONS:/user/rated/in
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser13: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/rated/in", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name RatedOutPostsList
             * @request GET:/user/rated/out/posts
             * @secure
             */
            ratedOutPostsList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/rated/out/posts", method: "GET", query: query, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser14
             * @request OPTIONS:/user/rated/out/posts
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser14: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/rated/out/posts", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name RatedOutUsersList
             * @request GET:/user/rated/out/users
             * @secure
             */
            ratedOutUsersList: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/rated/out/users", method: "GET", query: query, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser15
             * @request OPTIONS:/user/rated/out/users
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser15: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/rated/out/users", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name StakeCreate
             * @request POST:/user/stake
             * @secure
             */
            stakeCreate: function (UserStakeRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/stake", method: "POST", body: UserStakeRequest, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser16
             * @request OPTIONS:/user/stake
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser16: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/stake", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name SyncContactsCreate
             * @request POST:/user/syncContacts
             * @secure
             */
            syncContactsCreate: function (SyncContactsRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/syncContacts", method: "POST", body: SyncContactsRequest, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser17
             * @request OPTIONS:/user/syncContacts
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser17: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/syncContacts", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name TransferCreate
             * @request POST:/user/transfer
             * @secure
             */
            transferCreate: function (UserTransferRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/transfer", method: "POST", body: UserTransferRequest, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser18
             * @request OPTIONS:/user/transfer
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser18: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/transfer", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name UploadCreate
             * @request POST:/user/upload
             * @secure
             */
            uploadCreate: function (UserUploadRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/upload", method: "POST", body: UserUploadRequest, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser19
             * @request OPTIONS:/user/upload
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser19: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/upload", method: "OPTIONS", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @name UserRateCreate
             * @request POST:/user/userRate
             * @secure
             */
            userRateCreate: function (RatingUpdateRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/userRate", method: "POST", body: RatingUpdateRequest, secure: true, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @name OptionsUser20
             * @request OPTIONS:/user/userRate
             * @originalName optionsUser
             * @duplicate
             */
            optionsUser20: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/user/userRate", method: "OPTIONS", type: ContentType.Json }, params));
            },
        };
        return _this;
    }
    return Api;
}(HttpClient));
exports.Api = Api;
